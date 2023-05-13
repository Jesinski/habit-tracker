// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { UpdateTask } from "@/components/Tile";
import { tasks } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "./db";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<tasks>
) {
  const data: UpdateTask = JSON.parse(req.body);
  const result = await prisma.tasks.update({
    where: { id: data.id },
    data: { completed: data.completed },
  });

  res.status(200).json(result);
}
