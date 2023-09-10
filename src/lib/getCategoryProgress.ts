"use server";
import { Database } from "@/types/database-generated.types";
import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { cookies, headers } from "next/headers";
import getPercentages from "./getPercentages";

export default async function getCategoryProgress(category: string) {
  const supabase = createServerComponentSupabaseClient<Database>({
    supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL!,
    headers: headers,
    cookies: cookies,
  });

  const project = await supabase.from("projects").select("*").limit(1).single();
  if (!project.data) {
    console.log(project.data);
    throw new Error("Could not load User Project");
  }

  const { data: categoryData, error } = await supabase.rpc(
    "get_category_progress",
    {
      project_id: project.data?.id,
      category: category,
    }
  );

  if (!categoryData || error) {
    console.log(error);
    throw new Error(`Could not load ${category} Progress`);
  }

  const data = [0, 0, 0];
  for (let i = 0; i < categoryData.length; i++) {
    switch (categoryData[i].completed) {
      case -1:
        data[1] = categoryData[i].count;
        break;
      case 0:
        data[2] = categoryData[i].count;
        break;
      case 1:
        data[0] = categoryData[i].count;
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
