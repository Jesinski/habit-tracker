// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { tasks } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "./db";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<tasks>
) {
  const body = JSON.parse(req.body);
  const taskId = body.id;
  const completed = body.completed;
  const result = await prisma.tasks.update({
    where: { id: taskId },
    data: { completed: completed },
  });

  res.status(200).json(result);
}
