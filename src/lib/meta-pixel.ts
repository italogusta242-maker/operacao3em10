import { supabase } from "@/integrations/supabase/client";

export const trackMetaEvent = async (
  eventName: string,
  customData?: Record<string, unknown>
) => {
  try {
    const eventId = crypto.randomUUID();

    // Client-side pixel with event_id for deduplication
    if (typeof window !== "undefined" && typeof (window as any).fbq === "function") {
      (window as any).fbq("track", eventName, customData, { eventID: eventId });
    }

    // Server-side Conversions API
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

    await supabase.functions.invoke("meta-conversions", {
      body: payload,
    });
  } catch (err) {
    console.error("Meta tracking error:", err);
  }
};
