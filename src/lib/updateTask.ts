"use server";

import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

type Payload = {
  id: string;
  completed: number;
};

export default async function updateTask(data: Payload) {
  const cookieStore = cookies();

  const dbClient = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
      },
    }
  );

  await dbClient
    .from("tasks")
    .update({
      completed: data.completed,
    })
    .eq("id", data.id);
}
