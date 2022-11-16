import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient, kristallen } from "@prisma/client";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if ('POST' !== req.method) {
        return res.json({ message: 'Method not allowed' })
    }
    const data = JSON.parse(req.body)
    const prisma = new PrismaClient()
    const kristal:kristallen = await prisma.kristallen.create({
        data: data
    })
    prisma.$disconnect()
    res.json(kristal);
}