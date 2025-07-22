import { PrismaClient } from '@prisma/client';
import bcrypt from "bcrypt";

const prisma = new PrismaClient();
export default async function handler(req, res) {
    if (req.method !== "POST") return res.status(405).end();
    const { email, password } = req.body;
    if (!email || !password)
        return res.status(400).json({ error: "Email or password is required" });

    const existingUser = await prisma.user.findUnique({ where: { email } })
    if(existingUser)
        return res.status(409).json({error:"User Already exist"});

    const hashPassword = await bcrypt.hash(password,10);

    const user= await prisma.user.create({
        data:{
            email,
            password:hashPassword,
        },
    });

    return res.status(201).json({message:"user Created",userId:user.id});
}
