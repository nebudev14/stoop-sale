// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import prisma from "@/lib/db";

export default function handler(req, res) {
  res.status(200).json({ name: "John Doe" });
}
