"use server";
// import { Database } from "@/types/database-generated.types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { DateTime } from "luxon";
import { cookies } from "next/headers";
export default async function getNutritionProgress() {
  const supabase = createServerComponentClient<any>({ cookies });
  const { data: nutrition } = await supabase.rpc("get_nutrition_progress", {
    project_id: "a1e31ffc-9a25-46cb-ac67-e6728d80eb4d",
  });

  const completed = nutrition.length;
  const endDate = DateTime.fromJSDate(new Date("2023-09-25 23:59:59-03:00"));
  const startDate = DateTime.fromJSDate(new Date("2023-08-29 00:00:00-03:00"));
  const today = DateTime.now();
  const elapsedDays = Math.floor(today.diff(startDate, "days").days);
  const missed = elapsedDays - completed;
  const remaining = Math.floor(endDate.diff(today, "days").days);

  return {
    labels: ["Done", "Missed", "Remaining"],
    data: [completed, missed, remaining],
  };
}
