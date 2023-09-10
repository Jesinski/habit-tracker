"use server";
import { Database } from "@/types/database-generated.types";
import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { cookies, headers } from "next/headers";
import getPercentages from "./getPercentages";

export default async function getOverallProgress() {
  const supabase = createServerComponentSupabaseClient<Database>({
    supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL!,
    headers: headers,
    cookies: cookies,
  });

  const project = await supabase.from("projects").select("*").limit(1).single();
  if (!project.data) {
    console.log(project.error);
    throw new Error("Could not load User Project");
  }

  const { data: overall, error } = await supabase.rpc("get_overall_progress", {
    project_id: project.data?.id,
  });

  if (!overall || error) {
    console.log(error);
    throw new Error("Could not load Overall Progress");
  }

  const data = [0, 0, 0];
  for (let i = 0; i < overall.length; i++) {
    switch (overall[i].completed) {
      case -1:
        data[1] = overall[i].count;
        break;
      case 0:
        data[2] = overall[i].count;
        break;
      case 1:
        data[0] = overall[i].count;
        break;
    }
  }

  const percentages = getPercentages(data);

  return {
    labels: ["Done", "Missed", "Remaining"],
    data: data,
    bestPossible: percentages.bestPossible,
    currentPercentage: percentages.currentPercentage,
  };
}
