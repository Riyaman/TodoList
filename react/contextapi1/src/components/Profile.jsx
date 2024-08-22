import React from 'react'
import { useContext } from 'react'
import UsserContext from '../context/UserContext'
const Profile = () => {
  const {user} = useContext(UsserContext)
  if (!user) return <div>please login</div>
  return (
    <div>
      <h1>Welcome {user.username}</h1>
    </div>
  )
}

export default Profile
