import React from 'react'
import Cookies from 'js-cookie'
import { Navigate, Outlet } from 'react-router-dom'


function ClientRoutes() {

  const isLoggedIn = Cookies.get("token")
  const isAdmin = localStorage.getItem("type")
  if(isLoggedIn && isAdmin === "user"){
    return <Outlet/>
  }else{
    return <Navigate to='/admin-dashboard' replace/>
  }
}

export default ClientRoutes
