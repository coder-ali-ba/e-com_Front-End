import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import MainDashboard from './Pages/MainDashboard'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import Admindashboard from './Pages/AdminDashboard/Admindashboard'
import ClientDashboard from './Pages/ClientDashboard/ClientDashboard'

import About from './Pages/About'
import Contact from './Pages/Contact'
import Cart from './Pages/Cart'
import Shop from './Pages/Shop'
import AuthRoutes from './Routes/AuthRoutes'
import PrivateRoutes from './Routes/PrivateRoutes'

function App() {
  

  return (
    <>
    <Routes>
      <Route index element={<MainDashboard />}></Route>

      <Route element={<AuthRoutes/>}>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
      </Route>

      <Route path='/admin-dashboard' element={<Admindashboard />}></Route>

      <Route path='/client-dashboard' element={<ClientDashboard />}></Route>
      <Route element={<PrivateRoutes />}>
        <Route path='/shop' element={<Shop/>}></Route> 
        <Route path='/about' element={<About/>}></Route> 
        <Route path='/contact' element={<Contact/>}></Route> 
        <Route path='/cart' element={<Cart/>}></Route> 
      </Route>

    </Routes>
     
    </>
  )
}

export default App
