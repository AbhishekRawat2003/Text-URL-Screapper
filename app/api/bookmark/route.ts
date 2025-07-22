// app/api/bookmark/route.ts
import { auth as adminAuth } from "@/lib/firebaseAdmin"
import { getFirestore } from "firebase-admin/firestore"
import { NextRequest, NextResponse } from "next/server"

const db = getFirestore()

export async function GET(req: NextRequest) {
  try {
    const authHeader = req.headers.get("Authorization")
    if (!authHeader) return NextResponse.json({ error: "Missing token" }, { status: 401 })

    const token = authHeader.split("Bearer ")[1]
    const decodedToken = await adminAuth.verifyIdToken(token)
    const userId = decodedToken.uid

    const snapshot = await db.collection("bookmarks").where("userId", "==", userId).get()
    const bookmarks = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))

    return NextResponse.json(bookmarks)
  } catch (err) {
    console.error("❌ GET bookmark error", err)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }
}

export async function POST(req: NextRequest) {
  try {
    const authHeader = req.headers.get("Authorization")
    if (!authHeader) return NextResponse.json({ error: "Missing token" }, { status: 401 })

    const token = authHeader.split("Bearer ")[1]
    const decodedToken = await adminAuth.verifyIdToken(token)
    const userId = decodedToken.uid

    const { url } = await req.json()

    const data = {
      url,
      userId,
      title: url, // You can replace this with title fetching logic later
      summary: "Saved bookmark",
      favicon: `https://www.google.com/s2/favicons?domain=${new URL(url).hostname}&sz=64`,
      createdAt: Date.now(),
    }

    const docRef = await db.collection("bookmarks").add(data)

    return NextResponse.json({ id: docRef.id, ...data })
  } catch (err) {
    console.error("❌ POST bookmark error", err)
    return NextResponse.json({ error: "Failed to save bookmark" }, { status: 500 })
  }
}

// export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
//   try {
//     const authHeader = req.headers.get("Authorization")
//     if (!authHeader) return NextResponse.json({ error: "Missing token" }, { status: 401 })

//     const token = authHeader.split("Bearer ")[1]
//     const decodedToken = await adminAuth.verifyIdToken(token)
//     const userId = decodedToken.uid

//     const docRef = db.collection("bookmarks").doc(params.id)
//     const doc = await docRef.get()

//     if (!doc.exists || doc.data()?.userId !== userId) {
//       return NextResponse.json({ error: "Not found or unauthorized" }, { status: 404 })
//     }

//     await docRef.delete()
//     return NextResponse.json({ success: true })
//   } catch (err) {
//     console.error("❌ DELETE bookmark error", err)
//     return NextResponse.json({ error: "Failed to delete" }, { status: 500 })
//   }
// }