"use server";
import { Database } from "@/types/database-generated.types";
import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { cookies, headers } from "next/headers";

export default async function handleLogin(email: string, password: string) {
  const supabase = createServerComponentSupabaseClient<Database>({
    supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL!,
    headers: headers,
    cookies: cookies,
  });
  const { data } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  console.log({ sigin: data });
  return JSON.stringify(data);
}
