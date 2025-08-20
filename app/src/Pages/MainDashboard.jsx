import { Box, Button, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Components/NavebarComp'
import ImageSlider from './Components/Slider'
import axios from 'axios'
import { BaseUrl, endPoints } from '../constents'
import Cookies from 'js-cookie'



function MainDashboard() {
  const[items , setItems] = useState([])
  useEffect(()=>{
    getALlItems()
  },[])
  const getALlItems = async() => {
    const response = await axios.get(`${BaseUrl}${endPoints.getAllItems}`);
    setItems(response.data.data)
  }
  return (
    <div>  
      <Stack width={"100%"} maxWidth={"1024px"} direction={"row"} justifyContent={"space-between"} margin={"auto"} bgcolor={"GrayText"} padding={"10px"}>
        <Box>
         <Typography variant="h4" color='white'>WelCome</Typography>
        </Box>
        <Box display={"flex"} gap={"10px"}>
            <Button 
              variant='contained'><Link to="/signup" style={{textDecoration:"none", color:"white"}}>SignUp</Link>
            </Button>
            <Button
              variant='contained'><Link to="/login" style={{textDecoration:"none", color:"white"}}>LogIn</Link>
            </Button>
        </Box>
      </Stack>
       <Stack>
        {

        }
       </Stack>

      <ImageSlider />

      
    </div>
  )
}

export default MainDashboard
