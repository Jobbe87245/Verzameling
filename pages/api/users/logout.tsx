import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

export default async function handler(res: NextApiResponse) {
    document.cookie = `userID=; userName=; userRole=; SameSite=None; Secure`;
    res.json({succes: true})
}