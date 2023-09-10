"use server";
import { Database } from "@/types/database-generated.types";
import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { DateTime } from "luxon";
import { cookies, headers } from "next/headers";
import getPercentages from "./getPercentages";
export default async function getNutritionProgress() {
  const supabase = createServerComponentSupabaseClient<Database>({
    supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL!,
    headers: headers,
    cookies: cookies,
  });
  const { data: nutrition, error } = await supabase.rpc(
    "get_nutrition_progress",
    {
      project_id: "a1e31ffc-9a25-46cb-ac67-e6728d80eb4d",
    }
  );

  if (!nutrition || error) {
    console.log(error);
    throw new Error("Could not load Nutrition Progress");
  }

  const completed = nutrition.length;
  const endDate = DateTime.fromJSDate(new Date("2023-09-25 23:59:59-03:00"));
  const startDate = DateTime.fromJSDate(new Date("2023-08-29 00:00:00-03:00"));
  const today = DateTime.now();
  const elapsedDays = Math.floor(today.diff(startDate, "days").days);
  const missed = elapsedDays - completed;
  const remaining = Math.floor(endDate.diff(today, "days").days);

  const data = [completed, missed, remaining];
  const percentages = getPercentages(data);
  return {
    labels: ["Done", "Missed", "Remaining"],
    data: data,
    bestPossible: percentages.bestPossible,
    currentPercentage: percentages.currentPercentage,
  };
}
