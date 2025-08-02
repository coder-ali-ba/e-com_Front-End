import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import MainDashboard from './Pages/MainDashboard'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'

function App() {
  

  return (
    <>
    <Routes>
      <Route index element={<MainDashboard />}></Route>


      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<SignUp/>}></Route>

    </Routes>
     
    </>
  )
}

export default App
