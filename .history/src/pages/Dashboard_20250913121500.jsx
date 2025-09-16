import React, { useMemo, useState } from 'react'
import { useUsers } from '../context/UserContext'
import UserCard from '../components/UserCard'
import CreateUserModal from './CreateUserModal'

export default function Dashboard(){
  const { users, loading } = useUsers()
  const [query, setQuery] = useState('')
  const [showCreate, setShowCreate] = useState(false)

  const filtered = useMemo(()=>{
    const q = query.trim().toLowerCase()
    if(!q) return users
    return users.filter(u=>u.name.toLowerCase().includes(q))
  }, [users, query])

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h2">User Dashboard</h1>
        <button className="btn btn-primary" onClick={()=>setShowCreate(true)}>+ Create User</button>
      </div>

      <div className="mb-4">
        <input 
          className="form-control form-control-lg" 
          placeholder="Search by name..." 
          value={query} 
          onChange={e=>setQuery(e.target.value)} 
        />
      </div>

      {loading ? (
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-2">Loading users...</p>
        </div>
      ) : (
        <div className="row">
          {filtered.map(user=> (
            <div key={user.id} className="col-12 col-md-6 col-lg-4 mb-4">
              <UserCard user={user} />
            </div>
          ))}
        </div>
      )}

      {showCreate && <CreateUserModal onClose={()=>setShowCreate(false)} />}
    </div>
  )
}