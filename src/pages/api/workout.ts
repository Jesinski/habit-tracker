import { ProgressChartData } from "@/components/CategoryChart";
import { DateTime } from "luxon";
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "./db";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProgressChartData>
) {
  const PROJECT_ID = 43;
  const CATEGORY = "Workout";

  const project = await prisma.projects.findUnique({
    where: { id: PROJECT_ID },
  });

  const end = DateTime.fromJSDate(project?.enddate!);
  const pending = Math.floor(end.diffNow("days").days);

  const tasks = await prisma.tasks.groupBy({
    by: ["completed"],
    where: {
      projectid: 43,
      category: "Workout",
      datetime: { lt: new Date() },
    },
    _count: { id: true },
  });

  let missed = -1;
  let done = -1;
  let unknown = -1;

  tasks.forEach((row) => {
    switch (row.completed) {
      case -1:
        missed = row._count.id;
        break;
      case 1:
        done = row._count.id;
        break;
      case 0:
        unknown = row._count.id;
        break;
    }
  });

  console.log({ missed, done, unknown });
  console.log(tasks);

  res
    .status(200)
    .json({ done: done, missed: missed, unknown: unknown, pending: pending });
}
