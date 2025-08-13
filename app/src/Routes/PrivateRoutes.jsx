import React from 'react'
import Cookies from 'js-cookie'
import { Navigate, Outlet } from 'react-router-dom'



function PrivateRoutes() {
  const isLoggedIn = Cookies.get("token")
  const isAdmin = localStorage.getItem("type")
  if(isLoggedIn && isAdmin === "admin"){
    return <Outlet/>
  }else{
    return <Navigate to='/' replace/>
  }
}

export default PrivateRoutes
