import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import MainDashboard from './Pages/MainDashboard'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import Admindashboard from './Pages/AdminDashboard/Admindashboard'
import ClientDashboard from './Pages/ClientDashboard/ClientDashboard'
import Cart from './Pages/Cart'
import AuthRoutes from './Routes/AuthRoutes'
import PrivateRoutes from './Routes/PrivateRoutes'
import AllItems from './Pages/AllItems'
import AllClients from './Pages/allclients'
import AllOrders from './Pages/allorders'

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
        <Route path='/allitems' element={<AllItems/>}></Route> 
        <Route path='/allclients' element={<AllClients/>}></Route> 
        <Route path='/allorders' element={<AllOrders/>}></Route> 
        <Route path='/cart' element={<Cart/>}></Route> 
      </Route>

    </Routes>
     
    </>
  )
}

export default App
