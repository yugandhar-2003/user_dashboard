import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useUsers } from '../context/UserContext'

export default function UserDetails(){
  const { id } = useParams()
  const { users } = useUsers()
  const user = users.find(u=>String(u.id) === String(id))

  if(!user) return (
    <div>
      <p>User not found.</p>
      <Link to="/" className="btn btn-secondary">Back</Link>
    </div>
  )

  return (
    <div>
      <Link to="/" className="btn btn-link mb-3">← Back to Dashboard</Link>
      <div className="card">
        <div className="card-body">
          <h3>{user.name}</h3>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Website:</strong> {user.website}</p>

          <h5 className="mt-3">Address</h5>
          <p>{user.address?.street}, {user.address?.suite || ''} {user.address?.city} - {user.address?.zipcode}</p>

          <h6>Geo-location</h6>
          <p>Lat: {user.address?.geo?.lat} | Lng: {user.address?.geo?.lng}</p>

          <h5 className="mt-3">Company</h5>
          <p><strong>{user.company?.name}</strong></p>
          <p>{user.company?.catchPhrase}</p>
        </div>
      </div>
    </div>
  )
}