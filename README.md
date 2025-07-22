# 🔖 AI-Powered Bookmark Saver

A sleek, modern web application built with **Next.js** and **Firebase** that allows users to save, summarize, and manage bookmarks with automatic metadata extraction. The project focuses on enhancing web productivity by leveraging real-time database storage, Open Graph scraping, and AI summarization (Jina AI endpoint integration optional).

---

## 🚀 Project Objective

The objective of this project is to simplify bookmark management by enabling users to:
- 📝 Save any URL instantly along with its title, favicon, and description.
- 🧠 (Optionally) Generate AI-powered summaries using external APIs.
- 🔐 Securely authenticate users using Firebase Authentication.
- ☁️ Store all bookmark data in Firestore in real time.
- 🌐 Use a responsive, glassmorphic UI built with Tailwind CSS.

---

## 🛠️ Tech Stack

| Category         | Tools / Frameworks                            |
|------------------|-----------------------------------------------|
| Frontend         | [Next.js](https://nextjs.org/), React, JSX    |
| Styling          | Tailwind CSS, Glassmorphism UI                |
| Authentication   | Firebase Authentication (Email/Password)      |
| Backend          | Firebase Firestore + Firebase Admin SDK       |
| Scraping         | [jsdom](https://github.com/jsdom/jsdom), fetch |
| API (Optional)   | [Jina AI Summary Endpoint](https://jina.ai)   |
| Deployment       | Vercel (Recommended)                          |

---

## ✨ Features

- 🔐 **Secure Login** – Only authenticated users can save and view bookmarks.
- 📥 **Smart URL Handling** – Extracts page metadata like title, favicon, and description.
- 🧠 **Optional AI Summary** – Integrates Jina AI API to generate short summaries.
- 📦 **Real-time Storage** – Bookmarks stored in Firestore with user-specific filtering.
- 💎 **Responsive Design** – Optimized for mobile and desktop using Tailwind CSS.

---

## 📁 Project Structure
📦 bookmark-app/
├── pages/
│ ├── index.tsx # Home page with bookmark input
│ ├── dashboard.tsx # User dashboard showing saved bookmarks
│ └── api/
│ └── bookmark.js # Serverless function to extract and save metadata
├── components/
│ └── BookmarkCard.tsx # Reusable UI for displaying bookmarks
├── firebaseConfig.js # Firebase client initialization
├── tailwind.config.js # Tailwind theme config
└── README.md # You’re reading it 😉



---

## 🔧 Setup & Installation

1. **Clone the repo**
   ```bash
   git clone https://github.com/yourusername/bookmark-app.git
   cd bookmark-app

Install dependencies

npm install

# Configure Firebase
1. Create a Firebase project.
2. Enable Authentication (Email/Password).
3. Create a Firestore database.
4. Create a .env.local file:
'''
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id

FIREBASE_ADMIN_PROJECT_ID=your_project_id
FIREBASE_ADMIN_CLIENT_EMAIL=your_service_account_email
FIREBASE_ADMIN_PRIVATE_KEY=your_private_key'''


# Run the app
'''npm run dev'''

🔒 Security Notes
Firebase Admin SDK must only run in server-side or API routes.
Never expose your private_key in the client.
Environment variables are required for both client and server.

# 💡 Future Enhancements
📊 Bookmark analytics (clicks, popularity)
🗂️ Tags and filtering options
🔎 Full-text search
🌍 Browser Extension
📱 React Native version


# 🧑‍💻 Author
Abhishek Rawat
GitHub | LinkedIn | Portfolio

### 📜 License
This project is licensed under the MIT License.

“Productivity is never an accident. It is always the result of a commitment to excellence.”
