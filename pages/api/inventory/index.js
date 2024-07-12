require('dotenv').config()

import prisma from "@/lib/db";
import { Category, Price } from "@prisma/client";
import { z } from "zod";
import { S3, PutObjectCommand } from "@aws-sdk/client-s3";
import { File } from "buffer";
import formidable from 'formidable-serverless';
import fs from 'fs';


/* API Endpoint for adding a new item to the Stoop Sale inventory. */

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  // const data = await req.formData()
  const form = new formidable.IncomingForm();
  // form.uploadDir = "./";
  // form.keepExtensions = true;

  form.parse(req, async (err, fields, files) => {
    console.log("dsaf")
    console.log(fields)
  })
  // console.log(data)

  res.status(200).send({ msg: "hi" })
}