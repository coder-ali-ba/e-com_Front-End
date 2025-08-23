import React from 'react'
import Navbar from '../Components/NavebarComp'
import ImageSlider from '../Components/Slider'
import { Box, Button, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import ClientDrawer from '../Components/ClientDrawer'

function ClientDashboard() {
  return (
    <div>
       <Box display={"flex"} sx={{width:"100%"}}  direction={"row"} margin={"auto"} justifyContent={"space-between"} bgcolor={"GrayText"} padding={"10px"}>
         
            <Typography variant="h4" color='white'>WelCome</Typography>
         
         
            <Button
              variant='contained'><Link to="/login" style={{textDecoration:"none", color:"white"}}>LogIn</Link>
            </Button>
        
        </Box>
      
       <Stack width={"100%"}>
        <ClientDrawer />
       </Stack>
    </div>
  )
}

export default ClientDashboard
