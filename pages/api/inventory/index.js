
import { PrismaClient } from "@prisma/client";

/* API Endpoint for adding a new item to the Stoop Sale inventory. */


export default async function handler(req, res) {
  const body = req.body;
  const prisma = new PrismaClient();
  const count = await prisma.invetory.count();
  if (count == 0) await prisma.invetory.create({
    data: {}
  })

  const inventory = await prisma.invetory.findFirst();
  const data = await prisma.invetory.update({
    where: { id: inventory.id },
    data: {
      items: {
        create: {
          name: body.name,
          desc: body.desc,
          price: body.price,
          category: body.category,
          private: body.blur
        }
      }
    }
  })

  res.status(200).send({ msg: data })
}