
# ShaktiPath - Digital Empowerment Platform

A Progressive Web App (PWA) designed to empower rural women and youth with digital skills, career guidance, and gig economy tools. Built with React, Node.js, and Google Gemini AI.

## 🚀 Features

*   **AI Career Guide:** Personalized learning path recommendations using Gemini.
*   **Learning Management System:** Interactive lessons, quizzes, and assignments with AI grading.
*   **Career Tools:**
    *   Gig Finder (Locates local opportunities).
    *   Pitch Generator (Writes professional WhatsApp messages).
    *   Portfolio Writer (Generates project descriptions).
*   **Community Feed:** Share progress and join interest circles.
*   **Multilingual:** Full support for English, Hindi, and Marathi.
*   **Offline-First:** PWA support for mobile installation.

## 🛠️ Tech Stack

*   **Frontend:** React, TypeScript, Vite, Tailwind CSS.
*   **Backend:** Node.js, Express.
*   **Database:** MongoDB.
*   **AI:** Google Gemini API (Pro & Flash models).
*   **Deployment:** Vercel (Frontend) + Render (Backend).

## 📦 Installation

### 1. Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/shakti-path-app.git
cd shakti-path-app
```

### 2. Install Dependencies
You need to install dependencies for both the frontend and the backend.

**Frontend:**
```bash
cd shaktipath-frontend
npm install
```

**Backend:**
```bash
cd ../gemini-backend
npm install
```

### 3. Environment Setup
Create a `.env` file in the `gemini-backend` folder:
```env
API_KEY=your_google_gemini_api_key
DATABASE_URL=your_mongodb_connection_string
SESSION_SECRET=your_secret_key
PORT=3001
```

### 4. Run Locally
Open two terminals.

**Terminal 1 (Backend):**
```bash
cd gemini-backend
node server.js
```

**Terminal 2 (Frontend):**
```bash
cd shaktipath-frontend
npm run dev
```

Open `http://localhost:5173` in your browser.

## ☁️ Deployment Guide

### Backend (Render)
1.  Create a new **Web Service** on Render.
2.  Connect your GitHub repo.
3.  **Root Directory:** `gemini-backend`
4.  **Build Command:** `npm install`
5.  **Start Command:** `node server.js`
6.  Add Environment Variables (`API_KEY`, `DATABASE_URL`, `SESSION_SECRET`).

### Frontend (Vercel)
1.  Create a new **Project** on Vercel.
2.  Connect your GitHub repo.
3.  **Root Directory:** `shaktipath-frontend`
4.  **Build Command:** `npm run build` (Default)
5.  **Output Directory:** `dist` (Default)
6.  **Important:** Update `src/config.ts` in your code with the deployed Render URL.

---
*Empowering Rural India, One Click at a Time.*
