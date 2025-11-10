# 🎯 TalentIQ - Online Interview Platform

TalentIQ is a full-stack interview platform that lets users host and join live coding interviews with real-time **video calls, chat, and problem-solving sessions**.  
Built using modern web technologies with a focus on real-time communication and clean design.

---

## 🚀 Tech Stack

### 💻 Frontend
- React (Vite)
- Tailwind CSS
- Clerk Authentication
- TanStack Query (for server state management)
- Stream Video SDK & Stream Chat SDK (for video call + chat)
- Axios

### ⚙️ Backend
- Node.js (Express)
- MongoDB + Mongoose
- Clerk Express middleware (for authentication)
- Stream Node SDK (for video + chat backend)
- Inngest (for user sync & event handling)
- CORS, Dotenv

---

## 🔧 Features

- 🔐 **Authentication** with Clerk (Sign in / Sign up / Secure routes)
- 🎥 **Live Video Calls** for interview sessions using Stream Video SDK
- 💬 **Real-time Chat** during interviews
- 📘 **Problem Sets** and coding environment
- 🧑‍💻 **Session Management**
  - Create sessions
  - Join active sessions
  - End and archive completed sessions
- 📊 **Dashboard** showing recent and active sessions
- ⚡ **Deployed and fully working in production**

---

## 🗂️ Project Structure

talent-iq/
├── backend/
│ ├── src/
│ │ ├── controllers/
│ │ ├── lib/
│ │ ├── middleware/
│ │ ├── models/
│ │ └── routes/
│ ├── package.json
│ └── .env
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── hooks/
│ │ ├── pages/
│ │ ├── lib/
│ │ └── App.jsx
│ ├── vite.config.js
│ └── package.json
│
└── README.md

---

## ⚡ How It Works

- Users log in via **Clerk**.
- When a new session is created:
  - A **video room** and **chat channel** are created in Stream.
  - The session is stored in MongoDB.
- When another user joins, they automatically connect to the **Stream video call** and **chat**.
- The backend securely generates **Stream tokens** for each user.
- Once the interview ends, the session is marked as **completed**, and resources are cleaned up.

---

---

## 🛠️ Run Locally

1. Clone the repo:
   ```bash
   git clone https://github.com/yourusername/talent-iq.git
   cd talent-iq
2. Setup backend:
cd backend
npm install
npm run dev

3. Setup frontend:
cd ../frontend
npm install
npm run dev

4. Open your browser at: http://localhost:5173 


🌍 Deployment

Frontend: Savala

Backend: Savala Node Service

Database: MongoDB Atlas

Both frontend & backend connected via CLIENT_URL and VITE_API_URL envs.

👨‍💻 Made by ❤️ Sarath

I built this as part of my learning journey as a software engineering student — focused on real-time apps and MERN stack development.

“Start small, but build something that actually works.” 🚀
