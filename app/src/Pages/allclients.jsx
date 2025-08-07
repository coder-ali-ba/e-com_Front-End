import React, { useEffect, useState } from 'react'
import Navbar from './Components/NavebarComp'
import axios from 'axios'
import { BaseUrl, endPoints } from '../constents.js'
import Cookies from 'js-cookie'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import ReplayIcon from '@mui/icons-material/Replay';


function AllClients() {
  const[allData , setAllData ] =useState([])
  useEffect(()=>{
    getAllUsers()
  },[])
  const getAllUsers = async() => {
    const response = await axios.get(`${BaseUrl}${endPoints.getAllUsers}` , {
      headers : {
        Authorization : `Bearer ${Cookies.get("token")}`
      }
    })   
    setAllData(response.data.data)
  }

  const delUser = async(id) => {
      const response = await axios.delete(`${BaseUrl}${endPoints.deleteUser}/${id}`, {
        headers : {
          Authorization : `Bearer ${Cookies.get("token")}`
        }
      })
      getAllUsers()    
  }


  const updateStatus = async (id) => {
    const response = await axios.patch(`${BaseUrl}${endPoints.update}/${id}`,{},{
           headers : {
            Authorization : `Bearer ${Cookies.get("token")}`
           }
    })
    getAllUsers()  
  }

  return (
    <>
        <Navbar />
     <div style={{width : "100%", textAlign:"center", maxWidth:"1024px", margin:"auto"}}>
       <h1 >allclients</h1>
       <TableContainer component={Paper} sx={{ maxWidth: "100%", mx: "auto", mt: 3, boxShadow: 3 }}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#1e2124ff" }}>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Name</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Email</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>PhoneNo</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>IsDeleted</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>IsVarified</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allData.map((data , index)=>(
               <TableRow key={index}  sx={{
                 backgroundColor: index % 2 === 0 ? "#f5f5f5" : "white",
                "&:hover": { backgroundColor: "#e0f7fa" },
                }}>
                  <TableCell>{data.fullName}</TableCell>
                  <TableCell>{data.email}</TableCell>
                  <TableCell>{data.phoneNo}</TableCell>
                  <TableCell>{data.isDeleted ? (
                     <span style={{ color: "red", fontWeight: "bold" }}>Deleted</span>
                       ) : (
                       "Not Deleted"
                      )}</TableCell>
                  <TableCell>{data.isVarified ? (
                      <span style={{ color: "green", fontWeight: "bold" }}>Varified</span>
                       ) : (
                       "Not Varified"
                  )}</TableCell>
                   <TableCell>
                    <DeleteIcon onClick={()=>delUser(data._id)}></DeleteIcon>
                     <ReplayIcon onClick={()=>updateStatus(data._id)}></ReplayIcon>
                   </TableCell>
               </TableRow>
            ))

            }
            
          </TableBody>
        </Table>
      </TableContainer>
     </div>
    </>
  )
}

export default AllClients
