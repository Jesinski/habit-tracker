// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NewProjectData } from "@/components/NewProject";
import { DAILY_TEMPLATE } from "@/lib/dailyTasksTemplate";
import { tasks } from "@prisma/client";
import { DateTime } from "luxon";
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "./db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const data: NewProjectData = JSON.parse(req.body);
    const start = DateTime.fromISO(data.startDate);
    const end = DateTime.fromISO(data.endDate);
    const diff = end.diff(start, "days").days;

    const newProject = await prisma.projects.create({
      data: {
        startdate: start.toJSDate(),
        enddate: end.toJSDate(),
        length: diff,
      },
    });

    const tasks = [];
    for (let i = 0; i < diff; i++) {
      for (const task of DAILY_TEMPLATE) {
        const time = DateTime.fromISO(task.time);
        const newTask: Omit<tasks, "id"> = {
          name: task.name,
          datetime: start
            .plus({ days: i, hours: time.hour, minutes: time.minute })
            .toJSDate(),
          category: task.category,
          completed: task.completed,
          projectid: newProject.id,
        };
        tasks.push(newTask);
      }
    }
    await prisma.tasks.createMany({ data: tasks });

    res.end();
  } else {
    res.status(404).end("Route not implemented");
  }
}
