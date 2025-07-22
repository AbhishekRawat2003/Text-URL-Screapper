import { authMiddleware } from "../../lib/authMiddleware";

export default function handler(req, res) {
    const user = authMiddleware(req, res);
    if (!user) return; 
    
    return res.status(200).json({ message: "Protected content accessed", user });
}