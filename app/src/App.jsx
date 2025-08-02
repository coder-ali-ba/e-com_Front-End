import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import MainDashboard from './Pages/MainDashboard'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import Admindashboard from './Pages/AdminDashboard/Admindashboard'
import ClientDashboard from './Pages/ClientDashboard/ClientDashboard'

function App() {
  

  return (
    <>
    <Routes>
      <Route index element={<MainDashboard />}></Route>


      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<SignUp/>}></Route>

      <Route path='/admin-dashboard' element={<Admindashboard />}></Route>
      <Route path='/client-dashboard' element={<ClientDashboard />}></Route>

    </Routes>
     
    </>
  )
}

export default App
