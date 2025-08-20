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
import AllItems from './Pages/AdminDashboard/AllItems'
import AllClients from './Pages/AdminDashboard/allclients'
import AllOrders from './Pages/AdminDashboard/allorders'
import ClientRoutes from './Routes/ClientRoutes'

function App() {
  

  return (
    <>
    <Routes>
      <Route index element={<MainDashboard />}></Route>

      <Route element={<AuthRoutes/>}>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
      </Route>
       
      <Route element={<ClientRoutes/>}>
        <Route path='/client-dashboard' element={<ClientDashboard />}></Route>        
      </Route>
      

      

      
      <Route element={<PrivateRoutes />}>   
        <Route path='/admin-dashboard' element={<Admindashboard />}></Route>   
        <Route path='/allclients' element={<AllClients/>}></Route> 
        <Route path='/allorders' element={<AllOrders/>}></Route> 
        <Route path='/allitems' element={<AllItems/>}></Route> 
      </Route>



    </Routes>
     
    </>
  )
}

export default App
