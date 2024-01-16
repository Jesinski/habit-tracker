"use server";
import { createServerClient } from "@supabase/ssr";
import { DateTime } from "luxon";
import { cookies } from "next/headers";
import getPercentages from "./getPercentages";
export default async function getSleepProgress() {
  const cookieStore = cookies();

  const supabase = createServerClient(
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

  const project = await supabase.from("projects").select("*").limit(1).single();
  if (!project.data) {
    console.log(project.error);
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
  const endDate = DateTime.fromJSDate(new Date(project.data.end_date));
  const startDate = DateTime.fromJSDate(new Date(project.data.start_date));
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
