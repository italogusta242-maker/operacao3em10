const ALLOWED_ORIGINS = [
  'https://operacao3em10.lovable.app',
  'https://id-preview--88f1d683-0ff1-414d-b8ce-4865afc00130.lovable.app',
];

function getCorsHeaders(req: Request) {
  const origin = req.headers.get('Origin') || '';
  const allowedOrigin = ALLOWED_ORIGINS.find(o => origin.startsWith(o)) ? origin : ALLOWED_ORIGINS[0];
  return {
    'Access-Control-Allow-Origin': allowedOrigin,
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
  };
}

const PIXEL_ID = '1558200545293720';

const VALID_EVENTS = new Set([
  'PageView', 'ViewContent', 'Lead', 'Purchase', 'AddToCart',
  'InitiateCheckout', 'CompleteRegistration', 'Contact', 'Subscribe',
]);

Deno.serve(async (req) => {
  const corsHeaders = getCorsHeaders(req);

  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  // Only allow POST
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  // Validate origin
  const origin = req.headers.get('Origin') || '';
  if (!ALLOWED_ORIGINS.some(o => origin.startsWith(o))) {
    return new Response(JSON.stringify({ error: 'Forbidden' }), {
      status: 403,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  try {
    const accessToken = Deno.env.get('META_ACCESS_TOKEN');
    if (!accessToken) {
      throw new Error('META_ACCESS_TOKEN not configured');
    }

    const body = await req.json();
    const { event_name, event_id, event_time, event_source_url, user_data, custom_data, action_source } = body;

    // Validate event_name against whitelist
    if (typeof event_name !== 'string' || !VALID_EVENTS.has(event_name)) {
      return new Response(JSON.stringify({ error: 'Invalid or missing event_name' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Validate event_id format (UUID) if provided
    if (event_id !== undefined) {
      if (typeof event_id !== 'string' || !/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(event_id)) {
        return new Response(JSON.stringify({ error: 'Invalid event_id format' }), {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
    }

    // Validate event_time if provided
    if (event_time !== undefined && (typeof event_time !== 'number' || !Number.isInteger(event_time) || event_time <= 0)) {
      return new Response(JSON.stringify({ error: 'Invalid event_time' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Validate event_source_url if provided
    if (event_source_url !== undefined && (typeof event_source_url !== 'string' || event_source_url.length > 1000)) {
      return new Response(JSON.stringify({ error: 'Invalid event_source_url' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Validate action_source if provided
    const validActionSources = ['website', 'app', 'other'];
    if (action_source !== undefined && (typeof action_source !== 'string' || !validActionSources.includes(action_source))) {
      return new Response(JSON.stringify({ error: 'Invalid action_source' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Validate and sanitize user_data
    const safeUserData: Record<string, unknown> = {};
    if (user_data && typeof user_data === 'object' && !Array.isArray(user_data)) {
      const allowedUserFields = ['client_user_agent', 'em', 'ph', 'fn', 'ln', 'ct', 'st', 'zp', 'country', 'external_id', 'fbp', 'fbc'];
      for (const key of allowedUserFields) {
        if (key in user_data && typeof user_data[key] === 'string' && user_data[key].length <= 500) {
          safeUserData[key] = user_data[key];
        }
      }
    }

    const clientIp = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
      || req.headers.get('x-real-ip')
      || '';

    const enrichedUserData = {
      ...safeUserData,
      client_ip_address: clientIp,
      client_user_agent: typeof safeUserData.client_user_agent === 'string' ? safeUserData.client_user_agent : '',
    };

    // Validate and sanitize custom_data
    let safeCustomData: Record<string, unknown> | undefined;
    if (custom_data && typeof custom_data === 'object' && !Array.isArray(custom_data)) {
      const allowedCustomFields = ['value', 'currency', 'content_name', 'content_category', 'content_ids', 'content_type', 'num_items'];
      safeCustomData = {};
      for (const key of allowedCustomFields) {
        if (key in custom_data) {
          const val = custom_data[key];
          if (typeof val === 'string' && val.length <= 200) safeCustomData[key] = val;
          else if (typeof val === 'number' && isFinite(val)) safeCustomData[key] = val;
          else if (Array.isArray(val) && val.length <= 50 && val.every((v: unknown) => typeof v === 'string' && v.length <= 100)) safeCustomData[key] = val;
        }
      }
    }

    const eventData: Record<string, unknown> = {
      event_name,
      event_time: event_time || Math.floor(Date.now() / 1000),
      action_source: action_source || 'website',
      event_source_url: event_source_url || '',
      user_data: enrichedUserData,
    };

    if (event_id) {
      eventData.event_id = event_id;
    }

    if (safeCustomData && Object.keys(safeCustomData).length > 0) {
      eventData.custom_data = safeCustomData;
    }

    const payload = {
      data: [eventData],
    };

    const url = `https://graph.facebook.com/v21.0/${PIXEL_ID}/events?access_token=${accessToken}`;

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    return new Response(JSON.stringify(result), {
      status: response.ok ? 200 : 400,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Meta conversion tracking error:', error);
    return new Response(JSON.stringify({ error: 'Failed to process tracking event' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
