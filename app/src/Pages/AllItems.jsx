import React, { useEffect, useState } from 'react'
import Navbar from './Components/NavebarComp'
import ImageSlider from './Components/Slider'
import axios from 'axios'
import { BaseUrl, endPoints } from '../constents.js'
import { Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

function AllItems() {
  const [items , setItems] = useState()
  useEffect(()=>{
    getItems()
  })
  const getItems = async () => {
    const response = await axios.get(`${BaseUrl}${endPoints.getAllItems}`)
    setItems(response.data.data)   
  }

  // const delItem    = async(id) => {
  //      console.log(id);
       
  // } 
  // const updateItem = async(id) => {
  //      console.log(id);
       
  // } 
  
  
  return (
    <div>
        <Navbar /> 
        <Stack>        
          <h1>All items</h1>
          
        </Stack>       
    </div>
  )
}

export default AllItems
