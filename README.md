# 🚀 Breathe ESG Dashboard

A full-stack ESG emissions management dashboard built using React + Django REST Framework.

This platform allows users to upload CSV files containing emission data, automatically detect suspicious records, and manage approval/rejection workflows through a modern dashboard UI.

---

# 🌐 Live Demo

## Frontend
https://breathe-esg-dashboard.vercel.app/

## Backend API
https://breathe-esg-dashboard.onrender.com/api/records/

## Admin Panel
https://breathe-esg-dashboard.onrender.com/admin/

## GitHub Repository
https://github.com/ifxu263/breathe-esg-dashboard

---

# ✨ Features

- CSV Upload System
- ESG Emission Record Management
- Suspicious Record Detection
- Approve / Reject Workflow
- Django Admin Panel
- REST API Integration
- Responsive Modern UI
- Live Deployment

---

# 🛠️ Tech Stack

## Frontend
- React
- Vite
- Axios

## Backend
- Django
- Django REST Framework
- SQLite

## Deployment
- Vercel
- Render

---

# 📂 Project Structure

```bash
breathe-esg-dashboard/
│
├── backend/
│   ├── config/
│   ├── emissions/
│   ├── manage.py
│
├── frontend/
│   ├── src/
│   ├── public/
│
└── README.md
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/ifxu263/breathe-esg-dashboard.git
```

```bash
cd breathe-esg-dashboard
```

---

# 🔥 Backend Setup

```bash
cd backend
```

Create virtual environment:

```bash
python -m venv venv
```

Activate environment:

### Windows

```bash
venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Run migrations:

```bash
python manage.py migrate
```

Start backend server:

```bash
python manage.py runserver
```

---

# ⚡ Frontend Setup

```bash
cd frontend
```

Install packages:

```bash
npm install
```

Run frontend:

```bash
npm run dev
```

---

# 📊 API Endpoints

## Get Records

```text
GET /api/records/
```

## Upload CSV

```text
POST /api/upload/
```

## Update Record Status

```text
PATCH /api/records/<id>/status/
```

---

# 📌 Future Improvements

- JWT Authentication
- Charts & Analytics
- PostgreSQL Integration
- ESG Reporting Export
- AI-based anomaly detection

---

# 👨‍💻 Developer

## Syed Irfan

- GitHub: https://github.com/ifxu263
- LinkedIn: https://www.linkedin.com/in/ifxu

---

# ⭐ If you like this project

Give it a star on GitHub ⭐
