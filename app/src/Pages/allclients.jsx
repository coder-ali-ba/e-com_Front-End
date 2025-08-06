import React, { useEffect } from 'react'
import Navbar from './Components/NavebarComp'
import axios from 'axios'
import { BaseUrl, endPoints } from '../constents.js'
import Cookies from 'js-cookie'


function AllClients() {
  useEffect(()=>{
    getAllUsers()
  },[])
  const getAllUsers = async() => {
    const response = await axios.get(`${BaseUrl}${endPoints.getAllUsers}` , {
      headers : {
        Authorization : `Bearer ${Cookies.get("token")}`
      }
    })
    console.log(response.data.data);  
  }
  return (
    <>
        <Navbar />
     <div>
       <h1 style={{textAlign:"center"}}>allclients</h1>

     </div>
    </>
  )
}

export default AllClients
