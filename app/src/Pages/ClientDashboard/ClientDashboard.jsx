import React from 'react'
import Navbar from '../Components/NavebarComp'
import ImageSlider from '../Components/Slider'
import { Box, Button, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import ClientDrawer from '../Components/ClientDrawer'

function ClientDashboard() {
  return (
    <div>
       <Stack width={"100%"} maxWidth={"1024px"} direction={"row"} justifyContent={"space-between"} margin={"auto"} bgcolor={"GrayText"} padding={"10px"}>
        <Box>
         <Typography variant="h4" color='white'>WelCome</Typography>
        </Box>
        <Box display={"flex"} gap={"10px"}>
            <Button
              variant='contained'><Link to="/login" style={{textDecoration:"none", color:"white"}}>LogIn</Link>
            </Button>
        </Box>
      </Stack>
      <h1>ClientDashboard</h1>
      <ClientDrawer />
    </div>
  )
}

export default ClientDashboard
