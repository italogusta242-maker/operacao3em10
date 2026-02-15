import { supabase } from "@/integrations/supabase/client";

const firedEvents = new Set<string>();

export const trackMetaEvent = async (
  eventName: string,
  customData?: Record<string, unknown>
) => {
  // Prevent duplicate fires for one-shot events
  const oneShot = ["PageView"];
  if (oneShot.includes(eventName)) {
    if (firedEvents.has(eventName)) {
      console.warn(`[Meta] Blocked duplicate "${eventName}"`);
      return;
    }
    firedEvents.add(eventName);
  }

  try {
    const eventId = crypto.randomUUID();

    const payload: Record<string, unknown> = {
      event_name: eventName,
      event_id: eventId,
      event_time: Math.floor(Date.now() / 1000),
      event_source_url: window.location.href,
      action_source: "website",
      user_data: {
        client_user_agent: navigator.userAgent,
      },
    };

    if (customData) {
      payload.custom_data = customData;
    }

    console.log(`[Meta] Firing "${eventName}" (id: ${eventId})`);

    await supabase.functions.invoke("meta-conversions", {
      body: payload,
    });
  } catch (err) {
    // Log but never propagate — prevents React re-render loops
    console.error("[Meta] Tracking error (swallowed):", err);
  }
};
