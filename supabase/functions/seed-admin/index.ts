import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

Deno.serve(async (req) => {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
  const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
  const supabase = createClient(supabaseUrl, serviceRoleKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });

  const email = "admin@operação3em10.com";
  const password = "Admin@123!";

  // Check if user already exists
  const { data: existingUsers } = await supabase.auth.admin.listUsers();
  const exists = existingUsers?.users?.find((u) => u.email === email);

  if (exists) {
    // Ensure role exists
    await supabase.from("user_roles").upsert(
      { user_id: exists.id, role: "admin" },
      { onConflict: "user_id,role" }
    );
    return new Response(JSON.stringify({ message: "Admin already exists, role ensured" }), {
      headers: { "Content-Type": "application/json" },
    });
  }

  const { data, error } = await supabase.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
  });

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 400 });
  }

  // Assign admin role
  await supabase.from("user_roles").insert({
    user_id: data.user.id,
    role: "admin",
  });

  return new Response(JSON.stringify({ message: "Admin created", userId: data.user.id }), {
    headers: { "Content-Type": "application/json" },
  });
});
