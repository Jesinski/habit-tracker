"use server";
import { Database } from "@/types/database-generated.types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function handleLogin(email: string, password: string) {
  const supabase = createServerComponentClient<Database>({ cookies });
  const { data } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  console.log({ sigin: data });
  return JSON.stringify(data);
}
