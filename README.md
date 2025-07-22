# 🔖 AI-Powered Bookmark Saver

A modern, minimal, and intelligent web application that helps users **save, organize, and summarize web bookmarks**. Built with **Next.js**, **Firebase**, and **Tailwind CSS**, this tool leverages metadata extraction and (optionally) AI summarization to make bookmark management productive and intuitive.

---

## 🎯 Project Objective

The goal of this project is to **enhance how users collect and recall useful links** by:
- Instantly extracting metadata (title, favicon, and description) from URLs.
- (Optionally) Generating AI-powered summaries for web pages via the [Jina AI API](https://jina.ai/).
- Providing secure, user-specific storage and login using Firebase Authentication.
- Delivering a beautiful, responsive UI with a modern glassmorphism theme.

---

## 🧠 Key Features

✅ **Secure Authentication**  
– Only registered users can access bookmarks (Firebase Email/Password Auth)

📥 **Smart URL Parsing**  
– Automatically fetches and saves title, favicon, and Open Graph description.

🧠 **AI-Powered Summarization** *(Optional)*  
– Integrates with Jina AI’s summarizer to generate quick insights from pages.

🧾 **Real-time Sync with Firestore**  
– Bookmarks are user-specific and persist securely in the cloud.

🎨 **Beautiful Glassmorphic UI**  
– Fully responsive and built with Tailwind CSS.

📦 **Modular Codebase**  
– Clean and scalable folder structure using Next.js best practices.

---

## 🛠️ Tech Stack

| Category        | Tools / Libraries                                 |
|----------------|----------------------------------------------------|
| Frontend       | [Next.js](https://nextjs.org/), React, TypeScript  |
| Styling        | [Tailwind CSS](https://tailwindcss.com/)           |
| Auth & DB      | Firebase Authentication + Firestore                |
| Backend        | API Routes in Next.js, Firebase Admin SDK          |
| Metadata Fetch | `jsdom`, `node-fetch`, OpenGraph scraping          |
| AI Summary     | [Jina AI Open API](https://jina.ai) *(Optional)*   |
| Hosting        | Vercel (Recommended)                               |

---

## 📁 Folder Structure

bookmark-app/
├── pages/
│ ├── index.tsx # Home page to add bookmarks
│ ├── dashboard.tsx # Displays saved bookmarks
│ └── api/
│ └── bookmark.js # API route to extract metadata
├── components/
│ └── BookmarkCard.tsx # Reusable UI card for each bookmark
├── lib/
│ └── firebase.ts # Firebase client setup
├── styles/
│ └── globals.css # Tailwind global styles
├── .env.local # Firebase & Jina API keys (not committed)
└── README.md # Project documentation




---

## ⚙️ Setup Instructions

### 1. Clone the Repo

```bash
git clone https://github.com/yourusername/bookmark-app.git
cd bookmark-app

---

### create .env file

NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

FIREBASE_ADMIN_PROJECT_ID=your_project_id
FIREBASE_ADMIN_CLIENT_EMAIL=your_service_account_email
FIREBASE_ADMIN_PRIVATE_KEY="your_private_key"
JINA_API_ENDPOINT=https://api.jina.ai/...


---

## 🛡️ Security Notes

- All sensitive Firebase operations (like Admin SDK) are handled in server-side API routes only.
- The `JINA_API_ENDPOINT` is optional, but recommended for smarter summaries.
- **Never expose your `PRIVATE_KEY` or service credentials** in client-side code.

---

## 🌱 What I'd Do Next

Here are planned features for future versions:

- 🧠 Improve AI summary with custom prompt tuning.
- 🏷️ Add tags and categories to bookmarks.
- 🔍 Full-text search functionality.
- 📊 Analytics for popular bookmarks and visits.
- 🌐 Chrome/Edge browser extension.
- 📱 React Native mobile app.

---

## ⏱️ Time Spent

- 🚧 Initial MVP built in ~12–15 hours.
- 👨‍💻 UI polishing, summarizer integration, and testing took another ~4–5 hours.

---

## 👨‍💻 Author

**Abhishek Rawat**

🔗 [GitHub](https://github.com/) • [LinkedIn](https://linkedin.com/) • [Portfolio](https://)

---

## 📄 License

This project is licensed under the **MIT License**.

> “Productivity is never an accident. It is always the result of a commitment to excellence, intelligent planning, and focused effort.”
"""
