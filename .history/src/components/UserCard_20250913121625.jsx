import React from 'react'
import { Link } from 'react-router-dom'

export default function UserCard({ user }){
  return (
    <div className="card user-card h-100 shadow-sm">
      <div className="card-body">
        <div className="d-flex align-items-center mb-3">
          <div className="avatar me-3">
            {user.name.charAt(0)}
          </div>
          <div>
            <h5 className="card-title mb-0">{user.name}</h5>
            <p className="card-subtitle text-muted">{user.company?.name}</p>
          </div>
        </div>
        
        <div className="card-text">
          <p className="mb-2">
            <strong>Email:</strong> {user.email}
          </p>
          <p className="mb-3">
            <strong>Phone:</strong> {user.phone}
          </p>
        </div>
        
        <div className="text-end">
          <Link to={`/user/${user.id}`} className="btn btn-primary btn-sm">View Details</Link>
        </div>
      </div>
    </div>
  )
}