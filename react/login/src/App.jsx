import React from 'react'
import {Button} from './components/ui/button'
import Navbar from './components/Navbar'
import About from './components/About'
import Login from './components/Login'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import User from './components/User'
function App() {
  
  const router = createBrowserRouter([
    {path:'/',
      element:<><Navbar/><Login/></>,
    }
 
    // {path:'/user/:User', 
    //   element:<><Navbar/><User/></>
    // }
    // {path:/}
  ])
  return (
    <>
    <div className="bg-zinc-950 dark:bg-white" />

    <RouterProvider router={router} />
    </>
  )
}
export default App



