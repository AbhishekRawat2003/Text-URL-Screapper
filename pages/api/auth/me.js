// pages/api/auth/me.js
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const SECRET = process.env.JWT_SECRET || "your_jwt_secret"; // Keep in .env

export default async function handler(req, res) {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ error: "Unauthorized" });

    try {
        const decoded = jwt.verify(token, SECRET);
        const user = await prisma.user.findUnique({
            where: { id: decoded.userId },
            select: { id: true, email: true },
        });
        return res.status(200).json({ user });
    } catch (err) {
        return res.status(401).json({ error: "Invalid token" });
    }
}
