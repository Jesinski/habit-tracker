"use server";

import { Database } from "@/types/database-generated.types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

type Payload = {
  id: string;
  completed: number;
};

export default async function updateTask(data: Payload) {
  const dbClient = createServerComponentClient<Database>({ cookies });

  await dbClient
    .from("tasks")
    .update({
      completed: data.completed,
    })
    .eq("id", data.id);
}
