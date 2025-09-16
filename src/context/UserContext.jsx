import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios'

const UserContext = createContext()

export function UserProvider({ children }){
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    async function fetchUsers(){
      setLoading(true)
      try{
        const res = await axios.get('https://jsonplaceholder.typicode.com/users')
        setUsers(res.data)
      }catch(err){
        console.error(err)
      }finally{
        setLoading(false)
      }
    }
    fetchUsers()
  },[])

  const addUser = (user)=>{
    const id = users.length ? Math.max(...users.map(u=>u.id))+1 : 1
    setUsers(prev=>[...prev, { ...user, id }])
  }

  return (
    <UserContext.Provider value={{ users, addUser, loading }}>
      {children}
    </UserContext.Provider>
  )
}

export function useUsers(){
  return useContext(UserContext)
}