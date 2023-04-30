// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { tasks } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<tasks[]>
) {
  const result = await prisma.tasks.findMany({ orderBy: { time: "asc" } });
  console.log(result);
  res.status(200).json(result);
}
