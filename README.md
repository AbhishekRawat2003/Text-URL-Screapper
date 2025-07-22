# 🔖 Smart Bookmark Saver with AI Summarizer

A modern full-stack web app to **save bookmarks**, fetch metadata like **title, favicon**, and generate a smart **AI-powered summary** of the page using the Jina API. Authenticated users can access their own dashboard, manage their saved bookmarks, and enhance productivity by storing web insights instantly.

---

## ✨ Features

- 🔐 User Authentication (Firebase Auth)
- 🌐 Save Bookmarks with Title, URL, and Favicon
- 🧠 Auto-generated AI Summary (Jina AI API)
- 📄 Beautiful Dashboard with Individual Bookmark Cards
- ☁️ Data Persistence with Firebase Firestore
- 🔒 Secure API endpoints (server-side only)

---

## 📁 Project Structure

```
bookmark-app/
├── pages/
│   ├── index.tsx              # Home page to add bookmarks
│   ├── dashboard.tsx          # Displays saved bookmarks
│   └── api/
│       └── bookmark.js        # API route to extract metadata
├── components/
│   └── BookmarkCard.tsx       # Reusable UI card for each bookmark
├── lib/
│   └── firebase.ts            # Firebase client setup
├── styles/
│   └── globals.css            # Tailwind global styles
├── .env.local                 # Firebase & Jina API keys (not committed)
└── README.md                  # Project documentation
```

---

## ⚙️ Setup Instructions

### 1. Clone the Repo

```bash
git clone https://github.com/yourusername/bookmark-app.git
cd bookmark-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create `.env.local` File

Create a `.env.local` file in the root and add your config:

```env
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
```

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
### 🖼️ Screenshots

#### 🔐 Signup Page
![Signup](https://github.com/AbhishekRawat2003/Text-URL-Screapper/raw/a129b250ba0f1d2868a0bb82a420590e49520615/sigup.png)

#### 🔑 Login Page
![Login](https://github.com/AbhishekRawat2003/Text-URL-Screapper/raw/a129b250ba0f1d2868a0bb82a420590e49520615/login.png)

#### 🌙 Dashboard (Dark Mode)
![Dark Dashboard](https://github.com/AbhishekRawat2003/Text-URL-Screapper/raw/a129b250ba0f1d2868a0bb82a420590e49520615/dashdark.png)

#### ☀️ Dashboard (Light Mode)
![Light Dashboard](https://github.com/AbhishekRawat2003/Text-URL-Screapper/raw/a129b250ba0f1d2868a0bb82a420590e49520615/dash1.png)


## 👨‍💻 Author

**Abhishek Rawat**

🔗 [GitHub](https://github.com/) • [LinkedIn](https://www.linkedin.com/in/abhishekrawat2003/) • [Portfolio](https://aportifybhishek.netlify.app/)

---

## 📄 License

This project is licensed under the **MIT License**.

> “Productivity is never an accident. It is always the result of a commitment to excellence, intelligent planning, and focused effort.”
