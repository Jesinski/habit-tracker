"use server";

import { Database } from "@/types/database-generated.types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function loginWithEmail(email: string, password: string) {
  const supabase = createServerComponentClient<Database>({ cookies });

  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (error) {
    throw error;
  }
  return data;
}
