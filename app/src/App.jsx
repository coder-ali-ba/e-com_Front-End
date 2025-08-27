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
import Store from './Pages/ClientDashboard/Store'
import Trending from './Pages/ClientDashboard/Trending'
import Sales from './Pages/ClientDashboard/Sales'

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
        <Route path='/client-store' element={<Store />}></Route>        
        <Route path='/client-trending' element={<Trending />}></Route>        
        <Route path='/client-sales' element={<Sales />}></Route>        

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
