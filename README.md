# User Dashboard — React Frontend Intern Assignment

A small React app that fetches users and displays them in a dashboard. Includes search, client-side create user form, global state via Context API, routing, and a responsive UI using Bootstrap.

## Features
- Fetch users from `https://jsonplaceholder.typicode.com/users`.
- Dashboard with cards (name, email, phone, company).
- Search/filter by name.
- Create new user (client-side only) via modal form.
- User details page with address & geo-location.
- Responsive design (Bootstrap grid & utilities).

## Tech
- React 18 (functional components + hooks)
- Vite
- React Router v6
- Axios
- Bootstrap for quick styling

## Setup
1. Install dependencies
```bash
npm install
```

2. Run dev server
```bash
npm run dev
```

3. Open the URL shown by Vite (usually http://localhost:5173)

## Project structure
```
user-dashboard/
├─ index.html
├─ package.json
├─ src/
│  ├─ main.jsx
│  ├─ App.jsx
│  ├─ index.css
│  ├─ context/UserContext.jsx
│  ├─ pages/Dashboard.jsx
│  ├─ pages/CreateUserModal.jsx
│  └─ components/
│     ├─ UserCard.jsx
│     └─ UserDetails.jsx
```
