require('dotenv').config()

import prisma from "@/lib/db";
import { Category, Price } from "@prisma/client";
import { z } from "zod";
import { S3, PutObjectCommand } from "@aws-sdk/client-s3";
import { File } from "buffer";

/* API Endpoint for adding a new item to the Stoop Sale inventory. */

const s3Client = new S3({
  forcePathStyle: false,
  endpoint: process.env.SPACES_ENDPOINT,
  region: "nyc3",
  credentials: {
    accessKeyId: process.env.SPACES_KEY,
    secretAccessKey: process.env.SPACES_SECRET
  }
})

export default async function handler(req, res) {
  // const data = await req.formData()
  console.log(req.data)

  res.status(200).send({ msg: "hi" })
}