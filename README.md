# HubOps Full Stack Developer Assignment

## 🚀 Project Overview

This project is a full-stack web application built as part of the **HubOps Full Stack Developer interview task**.
It demonstrates frontend development with **Next.js + React** and backend API development using **Node.js + Express**.

The main goal was to build a scalable, SEO-friendly services page and connect it with a backend API while following production-ready coding practices.

---

## 🛠 Tech Stack

### Frontend

* Next.js (App Router)
* JavaScript (ES6+)

### Backend

* Node.js
* Express.js
* REST API

---

## 📂 Project Structure

### Frontend

```
app/
 ├── services/
 │    └── page.js
components/
 └── ServiceCard.jsx
```

### Backend

```
server/
 ├── routes/
 │    └── serviceRoutes.js
 ├── controllers/
 │    └── serviceController.js
 ├── index.js
 └── .env
```

---

## ⚡ Features

### Frontend

* Responsive services page (`/services`)
* API-based dynamic service data
* SEO metadata (title, description)
* Clean reusable components
* Loading and error state handling

### Backend

* REST API endpoint:

```
GET /api/services
```

* JSON service data response
* Environment configuration support
* Basic error handling

---

## 🔗 API Example Response

```json
[
  {
    "id": 1,
    "title": "Brand Strategy",
    "description": "Helping B2B brands position clearly in the market"
  }
]
```

---

## 🧠 Technical Decisions

### Why Next.js?

* Server-side rendering improves SEO.
* Fast performance with optimized builds.
* Better production readiness.

### Why Express Backend?

* Lightweight and flexible.
* Easy integration with frontend.
* Scalable for future microservices.

---

## 🌐 SEO & Performance Approach

* Used Next.js metadata for SEO tags.
* Server-side rendering for faster initial load.
* Semantic HTML structure.
* Optimized component structure.

## 🔄 API Scalability Strategy

If traffic increases:

* Add caching (Redis).
* Load balancing.
* Database integration.
* Microservices architecture.
* Rate limiting.

---

## 🔐 Security Considerations

For production:

* API authentication (JWT).
* HTTPS enforcement.
* Rate limiting.
* Input validation & sanitization.
* Environment variable protection.

---

## 🧩 API Versioning Strategy

Example:

```
/api/v1/services
/api/v2/services
```

Benefits:

* Backward compatibility.
* Smooth upgrades.
* Better maintenance.

---

## 📊 Performance Measurement

* Lighthouse reports
* Web Vitals
* Server response monitoring
* Network tab analysis

---

## 🔧 Refactoring Plan (If Project Grows)

First priorities:

1. Component modularization.
2. API abstraction layer.
3. State management improvement.
4. Folder structure standardization.

This ensures maintainability and scalability.

---

## ▶️ Setup Instructions

### Frontend

```bash
npm install
npm run dev
```

### Backend

```bash
npm install
npm run dev
```

Create `.env` file:

```
PORT=5000
```

---

## 🌍 Live Demo

[(Add deployed frontend link here)](https://hub-ops-task.vercel.app/services)

---


## 👨‍💻 Author

**Abhishek Mall**
Full Stack Developer (MERN Stack)
