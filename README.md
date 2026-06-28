# 🏋️ Membership Dashboard

A modern full-stack Membership Management Dashboard built using the **MERN Stack**. The application enables administrators to efficiently manage members through a clean, responsive interface with complete CRUD functionality, search capabilities, dashboard analytics, and secure backend integration.

---

## 🚀 Live Demo

* **Frontend (Vercel):** https://membership-dashboard-beta.vercel.app/
* **Backend (Render):** https://membership-dashboard-4je2.onrender.com/api
* **GitHub Repository:** https://github.com/vanshugoel/Membership-Dashboard

---

# 📌 Features

### 👥 Member Management

* Add new members
* Edit existing member details
* Delete members with confirmation modal
* View recently added members
* Automatic latest-first sorting
* Display 10 latest added or updated members

### 🔍 Search

* Search members by:
  * Name
  * Email
* Instant filtering without page reload
* Dedicated search view displaying only matching member cards

### 📊 Dashboard Analytics

* Total Members
* Active Members
* Total Revenue
* Today's Signups

### 💳 Membership Plans

Supports multiple membership categories:

* Basic
* Silver
* Gold
* Platinum

Membership fees are automatically calculated based on the selected membership type.

### 📱 Responsive Design

Optimized for:

* Desktop
* Laptop
* Tablet
* Mobile devices

### 🎨 User Interface

* Modern dark theme
* Light/Dark mode toggle
* Responsive cards
* Dropdown action menu
* Confirmation modal before deletion
* Loading spinner
* Empty state UI
* Toast notifications for user actions

---

# 🛠 Tech Stack

## Frontend

* React.js
* Vite
* JavaScript
* Tailwind CSS
* React Icons
* React Toastify

## Backend

* Node.js
* Express.js

## Database

* MongoDB Atlas
* Mongoose

## Deployment

Frontend
* Vercel

Backend
* Render
  
Version Control
* Git
* GitHub

---

# 📂 Project Structure

```
Membership-Dashboard
│
├── membership-dashboard
│   ├── src
│   │   ├── components
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── public
│   ├── package.json
│   └── vite.config.js
│
├── server
│   ├── config
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/vanshugoel/Membership-Dashboard.git
cd Membership-Dashboard
```

---

# Backend Setup

Navigate to server

```bash
cd server
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
MONGO_URI=YOUR_MONGODB_CONNECTION_STRING
PORT=5000
```

Run server

```bash
npm start
```

Backend runs on

```
http://localhost:5000
```

---

# Frontend Setup

Navigate to frontend

```bash
cd membership-dashboard
```

Install dependencies

```bash
npm install
```

Create `.env`

```env
VITE_API_URL=http://localhost:5000/api
```

Start frontend

```bash
npm run dev
```

Frontend runs on

```
http://localhost:5173
```

---

# REST API Endpoints

## Get all members

```
GET /api/members
```

Returns all members sorted by newest first.

---

## Add Member

```
POST /api/members
```

---

## Update Member

```
PUT /api/members/:id
```

---

## Delete Member

```
DELETE /api/members/:id
```

---

# Dashboard Metrics

The dashboard automatically calculates:

* Total Members
* Active Members
* Revenue
* Today's Signups

Revenue is computed based on membership plans.

---

# Environment Variables

Backend

```
MONGO_URI=
PORT=
```

Frontend

```
VITE_API_URL=
```

---

