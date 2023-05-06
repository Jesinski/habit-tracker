// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { tasks } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "./db";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<tasks[]>
) {
  const tomorrow = new Date();
  const yesterday = new Date();

  const result = await prisma.tasks.findMany({
    orderBy: {
      datetime: "asc",
    },
    where: {
      datetime: {
        lte: new Date(tomorrow.setDate(tomorrow.getDate() + 1)),
        gte: new Date(yesterday.setDate(yesterday.getDate() - 1)),
      },
    },
  });

  console.log(result);
  res.status(200).json(result);
}
