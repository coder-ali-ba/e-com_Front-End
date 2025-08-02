import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function MainDashboard() {
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
    </div>
  )
}

export default MainDashboard
