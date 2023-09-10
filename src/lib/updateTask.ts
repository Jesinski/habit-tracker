"use server";

import { Database } from "@/types/database-generated.types";
import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { cookies, headers } from "next/headers";

type Payload = {
  id: string;
  completed: number;
};

export default async function updateTask(data: Payload) {
  const dbClient = createServerComponentSupabaseClient<Database>({
    supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL!,
    headers: headers,
    cookies: cookies,
  });

  await dbClient
    .from("tasks")
    .update({
      completed: data.completed,
    })
    .eq("id", data.id);
}
