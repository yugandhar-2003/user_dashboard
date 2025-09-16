import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import UserDetails from './components/UserDetails'

export default function App(){
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link to="/" className="navbar-brand">User Dashboard</Link>
        </div>
      </nav>

      <main className="container my-4">
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/user/:id" element={<UserDetails/>} />
        </Routes>
      </main>

    
    </div>
  )
}