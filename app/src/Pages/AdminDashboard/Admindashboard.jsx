import { Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Components/NavebarComp'


function Admindashboard() {
  return (
    <div>
        <Navbar />
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
