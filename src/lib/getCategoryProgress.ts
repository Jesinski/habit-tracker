"use server";
import { Database } from "@/types/database-generated.types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import getPercentages from "./getPercentages";

export default async function getCategoryProgress(category: string) {
  const supabase = createServerComponentClient<Database>({ cookies });
  const { data: categoryData, error } = await supabase.rpc(
    "get_category_progress",
    {
      project_id: "a1e31ffc-9a25-46cb-ac67-e6728d80eb4d",
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
