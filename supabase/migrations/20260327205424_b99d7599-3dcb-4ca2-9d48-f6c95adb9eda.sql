
-- Insert missing profile for admin user
INSERT INTO profiles (id, email, is_admin) 
VALUES ('0e36001d-2601-4d35-806e-feb1c6fdca75', 'admin@operacao3em10.com', true) 
ON CONFLICT (id) DO UPDATE SET is_admin = true;

-- Update get_admin_metrics to use user_roles instead of profiles.is_admin
CREATE OR REPLACE FUNCTION get_admin_metrics(from_date TIMESTAMPTZ, to_date TIMESTAMPTZ)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_total_sessions INT;
  v_total_completions INT;
  v_cta_clicks INT;
  v_step_funnel JSONB;
  v_sessions_by_day JSONB;
  v_top_utm_sources JSONB;
  v_avg_total_time FLOAT;
  v_result JSONB;
  v_tz TEXT := 'America/Sao_Paulo';
BEGIN
  -- Permission Check using user_roles table
  IF NOT public.has_role(auth.uid(), 'admin') THEN
    RAISE EXCEPTION 'Acesso negado: Apenas administradores podem acessar métricas.';
  END IF;

  SELECT COUNT(DISTINCT session_id) INTO v_total_sessions
  FROM events WHERE event = 'session_start' AND created_at BETWEEN from_date AND to_date;

  SELECT COUNT(DISTINCT session_id) INTO v_total_completions
  FROM events WHERE event = 'result_view' AND created_at BETWEEN from_date AND to_date;

  SELECT COUNT(DISTINCT session_id) INTO v_cta_clicks
  FROM events WHERE event = 'result_cta_click' AND created_at BETWEEN from_date AND to_date;

  SELECT COALESCE(jsonb_agg(row_to_json(t)), '[]'::jsonb) INTO v_step_funnel
  FROM (
    WITH step_stats AS (
      SELECT 
        v.step_index, v.step_id,
        COUNT(DISTINCT v.session_id) as viewed,
        COUNT(DISTINCT c.session_id) FILTER (WHERE c.event = 'step_complete' OR (v.step_id = 'result' AND c.event = 'result_cta_click')) as completed,
        ROUND((AVG(c.time_on_step_ms) FILTER (WHERE c.event = 'step_complete' OR c.event = 'result_cta_click'))/1000.0::numeric, 1) as avg_seconds
      FROM events v
      LEFT JOIN events c ON c.session_id = v.session_id AND c.step_id = v.step_id
      WHERE v.event = 'step_view' AND v.created_at BETWEEN from_date AND to_date
      GROUP BY v.step_index, v.step_id
    ),
    answer_breakdown AS (
      SELECT step_id,
        jsonb_agg(jsonb_build_object('option', value, 'count', count, 'percentage', percentage) ORDER BY count DESC) as options
      FROM (
        SELECT step_id, value, count,
          ROUND((100.0 * count / SUM(count) OVER (PARTITION BY step_id))::numeric, 1) as percentage
        FROM (
          SELECT step_id,
            CASE WHEN step_id IN ('16', '17') AND value::text ~ '^[0-9.]+$' 
              THEN (floor(value::text::numeric / 10) * 10)::text || '-' || (floor(value::text::numeric / 10) * 10 + 10)::text || ' kg'
              ELSE value::text END as value,
            COUNT(*) as count
          FROM events 
          WHERE event IN ('option_select', 'slider_final') AND value IS NOT NULL AND value::text != 'null' AND created_at BETWEEN from_date AND to_date
          GROUP BY 1, 2
        ) counts_sub
      ) percentage_sub
      GROUP BY step_id
    )
    SELECT s.step_index, s.step_id, s.viewed, s.completed,
      CASE WHEN s.viewed > 0 THEN ROUND((100.0 * (1 - s.completed::numeric / s.viewed::numeric))::numeric, 1) ELSE 0 END as dropoff_pct,
      s.avg_seconds, COALESCE(ab.options, '[]'::jsonb) as answers
    FROM step_stats s
    LEFT JOIN answer_breakdown ab ON ab.step_id = s.step_id
    ORDER BY s.step_index ASC
  ) t;

  SELECT COALESCE(jsonb_agg(row_to_json(t)), '[]'::jsonb) INTO v_sessions_by_day
  FROM (
    WITH daily_series AS (
      SELECT generate_series(
        CASE WHEN (to_date - from_date) <= '1.1 days'::interval THEN date_trunc('hour', from_date AT TIME ZONE v_tz) ELSE (from_date AT TIME ZONE v_tz)::date::timestamp END,
        CASE WHEN (to_date - from_date) <= '1.1 days'::interval THEN date_trunc('hour', to_date AT TIME ZONE v_tz) ELSE (to_date AT TIME ZONE v_tz)::date::timestamp END,
        CASE WHEN (to_date - from_date) <= '1.1 days'::interval THEN '1 hour'::interval ELSE '1 day'::interval END
      ) as ts
    ),
    actual_sessions AS (
      SELECT CASE WHEN (to_date - from_date) <= '1.1 days'::interval THEN date_trunc('hour', created_at AT TIME ZONE v_tz) ELSE (created_at AT TIME ZONE v_tz)::date::timestamp END as ts,
        COUNT(DISTINCT session_id) as sessions
      FROM events WHERE event = 'session_start' AND created_at BETWEEN from_date AND to_date
      GROUP BY 1
    )
    SELECT CASE WHEN (to_date - from_date) <= '1.1 days'::interval THEN to_char(ds.ts, 'HH24:00') ELSE to_char(ds.ts, 'YYYY-MM-DD') END as date,
      COALESCE(as_s.sessions, 0) as sessions
    FROM daily_series ds
    LEFT JOIN actual_sessions as_s ON as_s.ts = ds.ts
    ORDER BY ds.ts
  ) t;

  SELECT COALESCE(jsonb_agg(row_to_json(t)), '[]'::jsonb) INTO v_top_utm_sources
  FROM (
    SELECT meta->>'utm_source' as source, meta->>'utm_campaign' as campaign, COUNT(*) as sessions
    FROM events WHERE event = 'session_start' AND meta->>'utm_source' IS NOT NULL AND created_at BETWEEN from_date AND to_date
    GROUP BY source, campaign ORDER BY sessions DESC LIMIT 10
  ) t;

  SELECT ROUND((AVG(total_time_ms)/1000.0)::numeric, 0) INTO v_avg_total_time
  FROM events WHERE event = 'result_cta_click' AND created_at BETWEEN from_date AND to_date;

  SELECT json_build_object(
    'summary', json_build_object(
      'totalSessions', COALESCE(v_total_sessions, 0),
      'totalCompletions', COALESCE(v_total_completions, 0),
      'completionRate', CASE WHEN v_total_sessions > 0 THEN ROUND((v_total_completions::numeric / v_total_sessions::numeric * 100)::numeric, 1) ELSE 0 END,
      'ctaClicks', COALESCE(v_cta_clicks, 0),
      'ctaRate', CASE WHEN v_total_sessions > 0 THEN ROUND((v_cta_clicks::numeric / v_total_sessions::numeric * 100)::numeric, 1) ELSE 0 END,
      'avgTimeToCtaSeconds', COALESCE(v_avg_total_time, 0)
    ),
    'stepFunnel', COALESCE(v_step_funnel, '[]'::jsonb),
    'sessionsByDay', COALESCE(v_sessions_by_day, '[]'::jsonb),
    'topUtmSources', COALESCE(v_top_utm_sources, '[]'::jsonb)
  ) INTO v_result;

  RETURN v_result;
END;
$$;

-- Also update events RLS to use user_roles instead of profiles
DROP POLICY IF EXISTS "allow_select_events" ON events;
CREATE POLICY "allow_select_events" ON events
FOR SELECT TO authenticated
USING (public.has_role(auth.uid(), 'admin'));
