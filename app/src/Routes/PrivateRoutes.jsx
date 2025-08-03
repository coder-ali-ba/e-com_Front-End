import React from 'react'
import Cookies from 'js-cookie'
import { Navigate, Outlet } from 'react-router-dom'



function PrivateRoutes() {
  const isLoggedIn = Cookies.get("token")
  if(isLoggedIn){
    return <Outlet/>
  }else{
    return <Navigate to='/' replace/>
  }
}

export default PrivateRoutes
