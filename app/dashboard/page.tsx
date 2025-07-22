'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  getAuth,
  onAuthStateChanged,
  signOut,
  type User,
} from 'firebase/auth'
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from '@/firebaseConfig'
import axios from 'axios'
import { Moon, Sun, LogOut, UserCircle } from 'lucide-react'

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export default function Dashboard() {
  const [user, setUser] = useState<User | null>(null)
  const [bookmarks, setBookmarks] = useState<any[]>([])
  const [url, setUrl] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [darkMode, setDarkMode] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        router.push('/login')
      } else {
        setUser(user)
        const token = await user.getIdToken()
        fetchBookmarks(token)
      }
    })

    return () => unsubscribe()
  }, [])

  const fetchBookmarks = async (token: string) => {
    try {
      const res = await axios.get('/api/bookmark', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      setBookmarks(res.data)
    } catch (error) {
      console.error("❌ Failed to fetch bookmarks", error)
    }
  }

  const handleLogout = async () => {
    await signOut(auth)
    router.push('/login')
  }

  const handleSave = async () => {

    if (!url) return

    const currentUser = auth.currentUser
    if (!currentUser) return

    try {
      const token = await currentUser.getIdToken()
      const res = await axios.post('/api/bookmark', { url }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      setBookmarks(prev => [...prev, res.data]) // Add new bookmark to list
      setUrl("") // Clear input
    } catch (err) {
      console.error("❌ Error saving bookmark:", err)
    }
  }

  const handleDelete = async (id: string) => {
    if (!user) return
    const token = await user.getIdToken()
    try {
      await axios.delete(`/api/bookmark/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      setBookmarks(bookmarks.filter((bm) => bm.id !== id))
    } catch (err) {
      console.error("❌ Error deleting", err)
    }
  }

  return (
    <div className={`${darkMode ? 'dark bg-[#212020] text-[#E9E3DF]' : 'bg-[#E9E3DF] text-[#000000]'} min-h-screen`}>
      {/* Top Nav */}
      <div className="flex justify-between items-center p-4 border-b dark:border-[#DDDEAB] border-[#932F67]">
        <div className="text-xl font-bold text-[#932F67] dark:text-[#D92C54]">🔖 MyBookmarks</div>
        <div className="flex items-center gap-4">
          <button onClick={() => setDarkMode(!darkMode)} className="hover:scale-110 transition">
            {darkMode ? <Sun color="#FF7A30" /> : <Moon color="#465C88" />}
          </button>
          <div className="flex items-center gap-2">
            <UserCircle color={darkMode ? "#8ABB6C" : "#932F67"} />
            <span className="text-sm font-semibold text-[#D92C54]">{user?.email}</span>
          </div>
          <button onClick={handleLogout} className="text-[#D92C54] hover:underline flex items-center gap-1">
            <LogOut size={18} /> Logout
          </button>
        </div>
      </div>

      {/* Add New Bookmark + Search */}
      <div className="p-4 flex flex-col sm:flex-row gap-2">
        <input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Paste a URL to save..."
          className="flex-1 p-2 border rounded dark:bg-[#d8d8e0] dark:border-[#DDDEAB] border-[#932F67] dark:text-[#932F67]"
        />
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search bookmarks..."
          className="flex-1 p-2 border rounded dark:bg-[#d8d8e0] dark:border-[#DDDEAB] border-[#465C88]  dark:text-[#932F67]"
        />
        <button
          onClick={handleSave}
          className="bg-[#932F67] hover:bg-[#D92C54] text-white px-4 py-2 rounded"
        >
          Save
        </button>
      </div>

      {/* Bookmark List */}
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 overflow-hidden">
        {bookmarks
          .filter(b => b.title?.toLowerCase().includes(searchQuery.toLowerCase()))
          .map((bookmark) => (
            <div key={bookmark.id} className="bg-[#ffffff] dark:bg-[#7474a5] p-4 shadow-md rounded-lg border dark:border-[#DDDEAB] overflow-hidden ">
              <img src={bookmark.favicon} alt="icon" className="h-6 w-6 mb-2" />
              <a href={bookmark.url} target="_blank" rel="noopener noreferrer">
                <h2 className="text-lg font-semibold dark:text-[#E9E3DF] text-[#932F67]">{bookmark.title}</h2>
              </a>
              <p className="text-sm text-[#465C88] dark:text-[#DDDEAB] mb-2">{bookmark.summary}</p>
              <button
                onClick={() => handleDelete(bookmark.id)}
                className="text-white text-sm font-semibold px-3 py-1 rounded bg-[#D92C54] hover:bg-[#932F67] transition"
              >
                Delete
              </button>
            </div>
          ))}
      </div>
    </div>

  )
}
