"use server";
import { Database } from "@/types/database-generated.types";
import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { DateTime } from "luxon";
import { cookies, headers } from "next/headers";
import getPercentages from "./getPercentages";
export default async function getSleepProgress() {
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

  const { data: sleep, error } = await supabase.rpc("get_sleep_progress", {
    project_id: project.data?.id,
  });

  if (!sleep || error) {
    console.log(error);
    throw new Error("Could not load Sleep Progress");
  }

  const completed = sleep.length;
  console.log(completed);
  const endDate = DateTime.fromJSDate(new Date(project.data.end_date));
  const startDate = DateTime.fromJSDate(new Date(project.data.start_date));
  const today = DateTime.now();
  const elapsedDays = Math.floor(today.diff(startDate, "days").days);
  const missed = elapsedDays - completed;
  const remaining = Math.floor(endDate.diff(today, "days").days);

  const data = [completed, missed, remaining];
  console.log(data);
  const percentages = getPercentages(data);
  return {
    labels: ["Done", "Missed", "Remaining"],
    data: data,
    bestPossible: percentages.bestPossible,
    currentPercentage: percentages.currentPercentage,
  };
}
