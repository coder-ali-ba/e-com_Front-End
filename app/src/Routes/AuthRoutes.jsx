import React from 'react'
import Cookies from 'js-cookie'
import { Navigate, Outlet } from 'react-router-dom';


function AuthRoutes() {

    const isLoggedIn = Cookies.get('token')
    const isAdmin = localStorage.getItem("type")
    if (isLoggedIn && isAdmin == "admin") {
       return <Navigate to="/admin-dashboard" replace />
     }

    if (isLoggedIn && isAdmin == "user") {
       return <Navigate to="/client-dashboard" replace />
     } 

    return <Outlet />;
}

export default AuthRoutes
