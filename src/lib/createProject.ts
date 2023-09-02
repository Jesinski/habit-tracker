"use server";

import { NewProjectData } from "@/components/NewProject";
import { Database } from "@/types/database-generated.types";
import { Tables } from "@/types/database.types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { DateTime } from "luxon";
import { cookies } from "next/headers";
import { DAILY_TEMPLATE } from "./dailyTasksTemplate";

export default async function createProject(data: NewProjectData) {
  const supabase = createServerComponentClient<Database>({ cookies });

  const start = DateTime.fromISO(data.startDate);
  const end = DateTime.fromISO(data.endDate);
  const diff = end.diff(start, "days").days;

  const { data: newProject, error: newProjectError } = await supabase
    .from("projects")
    .insert({
      start_date: data.startDate,
      end_date: data.endDate,
    })
    .select()
    .single();

  if (!newProject || newProjectError) {
    console.log(newProjectError);
    throw new Error("Could not create project");
  }

  const tasks = [];
  for (let i = 0; i < diff; i++) {
    for (const task of DAILY_TEMPLATE) {
      const time = DateTime.fromISO(task.time);
      const newTask: Omit<Tables<"tasks">, "id"> = {
        name: task.name,
        time: start
          .set({ hour: time.hour, minute: time.minute })
          .plus({ days: i })
          .toISO()!,
        category: task.category,
        completed: task.completed,
        project_id: newProject.id,
      };
      tasks.push(newTask);
    }
  }

  const { error: tasksError } = await supabase.from("tasks").insert(tasks);

  if (tasksError) {
    console.log(tasksError);
    throw new Error("Could not create tasks");
  }
}
