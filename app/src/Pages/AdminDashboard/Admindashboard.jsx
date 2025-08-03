import { Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Components/NavebarComp'
import ImageSlider from '../Components/Slider'


function Admindashboard() {
  return (
    <div>
        <Navbar />
        <ImageSlider />
      {/* <Stack>
        <Stack><Typography>ADMIN</Typography></Stack>
        <Stack>
            <Link>Home</Link>
            <Link>Trending</Link>
            <Link>Items</Link>
            <Link>Home</Link>
        </Stack>
        <Stack></Stack>
      </Stack> */}
    </div>
  )
}

export default Admindashboard
