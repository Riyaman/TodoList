import React from 'react'
import auth from './data/auth'
const Home = () => {
  const handleLogout = () => {
    setUser(null);
  };
  return (
    <div>
      <h1>user login secesfully</h1>
      <button
              onClick={handleLogout}
              className="mt-6 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition-colors"
            >
              Logout
            </button>
    </div>
  )
}

export default Home
