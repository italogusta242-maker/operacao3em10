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

    // Validate event name against whitelist
    if (!event_name || !VALID_EVENTS.has(event_name)) {
      return new Response(JSON.stringify({ error: 'Invalid or missing event_name' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Validate event_id format (UUID)
    if (event_id && !/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(event_id)) {
      return new Response(JSON.stringify({ error: 'Invalid event_id format' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const clientIp = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
      || req.headers.get('x-real-ip')
      || '';

    const enrichedUserData = {
      ...(user_data || {}),
      client_ip_address: clientIp,
      client_user_agent: user_data?.client_user_agent || '',
    };

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

    if (custom_data) {
      eventData.custom_data = custom_data;
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
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
