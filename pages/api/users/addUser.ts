import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient, gebruikers } from "@prisma/client";

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    if ('POST' !== req.method) {
        return res.json({message: 'Method not allowed'})
    }
    const prisma = new PrismaClient()
    const data = JSON.parse(req.body)
    
    const newGebruiker: gebruikers = await prisma.gebruikers.create({
            data: data
        }
    )
    prisma.$disconnect()
    res.json(newGebruiker);
}