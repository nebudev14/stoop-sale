require('dotenv').config()

import { Category, Price, PrismaClient } from "@prisma/client";
import { S3, PutObjectCommand } from "@aws-sdk/client-s3";
import formidable from 'formidable-serverless';
import fs from 'fs';

const s3Client = new S3({
  forcePathStyle: false,
  endpoint: process.env.SPACES_ENDPOINT,
  region: "nyc3",
  credentials: {
    accessKeyId: process.env.SPACES_KEY,
    secretAccessKey: process.env.SPACES_SECRET
  }
})

const prisma = new PrismaClient();

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  const { id } = req.query;
  const form = new formidable.IncomingForm();
  form.uploadDir = "./";
  form.keepExtensions = true;
  form.parse(req, async (err, fields, files) => {
    const rawFiles = Object.keys(files).map(x => fs.readFileSync(files[x].path))
    rawFiles.forEach(async (file, i) => {
      const command = new PutObjectCommand({
        "Bucket": "stoop",
        "ACL": "public-read",
        "Key": `${id}/${i}`,
        "Body": file
      })

      const res = await s3Client.send(command);
      console.log(res)
      Object.keys(files).map(x => fs.unlinkSync(files[x].path))
    })


    res.status(200).send({ msg: files })
  })

  res.status(200).send({ msg: "hi" })
}