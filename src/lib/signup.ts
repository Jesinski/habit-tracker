"use server";

import { createClient } from "@supabase/supabase-js";

export default async function signUpWithEmail(email: string, password: string) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_KEY!
  );

  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  });

  if (error) {
    throw error;
  }
  return data;
}
