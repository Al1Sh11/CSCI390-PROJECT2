# TaskFlow – Student Productivity Hub

> **CSCI390 Project 2** · A responsive ReactJS web application that helps students manage tasks, track progress and stay organised.

---

## 📸 Screenshots

### Home Page
![Home Page](https://github.com/user-attachments/assets/a0c05b4d-c084-487b-a8fe-57d902862187)

### About Page
![About Page](https://github.com/user-attachments/assets/54866fc4-0bc8-4368-baf8-54607d9123c5)

---

## 📋 Project Description

**TaskFlow** is a four-page student productivity web application built with React 19, React Router v7 and Tailwind CSS v4. It solves the real-world problem of academic task overload by providing a clean, fast, no-account-required interface for managing priorities and tracking progress.

### Pages
| Route | Description |
|---|---|
| `/` | **Home** – Hero section, stats and "How It Works" steps |
| `/about` | **About** – Mission statement, tech stack, project timeline and team |
| `/features` | **Features** – Feature cards and comparison table |
| `/contact` | **Contact** – Validated contact form with success state |

---

## 🚀 Setup Instructions

### Prerequisites
- Node.js 18 or higher
- npm 9 or higher

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Al1Sh11/CSCI390-PROJECT2.git
cd CSCI390-PROJECT2

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The app will be available at **http://localhost:5173**

### Build for Production

```bash
npm run build       # Creates optimised bundle in /dist
npm run preview     # Preview the production build locally
```

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| React | 19 | UI component library |
| React Router | v7 | Client-side routing |
| Tailwind CSS | v4 | Utility-first styling |
| Vite | v8 | Build tool & dev server |
| Git & GitHub | – | Version control & hosting |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx       # Responsive navigation with mobile hamburger
│   └── Footer.jsx       # Site footer
├── pages/
│   ├── Home.jsx         # Landing page with hero, stats, CTA
│   ├── About.jsx        # Mission, tech stack, timeline, team
│   ├── Features.jsx     # Feature cards + comparison table
│   └── Contact.jsx      # Validated contact form
├── App.jsx              # Route definitions
├── main.jsx             # React entry point with BrowserRouter
└── index.css            # Tailwind CSS import
```

---

## ✅ Requirements Checklist

- [x] ReactJS frontend
- [x] Tailwind CSS for responsive styling
- [x] At least 4 pages (Home, About, Features, Contact)
- [x] Responsive design (desktop & mobile)
- [x] Git version control with commit history
- [x] README with description, setup instructions and screenshots

---

## 👥 Team

| Name | Role |
|---|---|
| Ali Shehhi | Frontend Developer |
| Sara Ahmed | UI/UX Designer |
| Omar Hassan | Project Manager |

---

*Submitted for CSCI390 – Software Engineering, Spring 2026*
