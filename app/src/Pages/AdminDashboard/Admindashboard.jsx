import { Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Components/NavebarComp'
import ImageSlider from '../Components/Slider'
import AddItemModal from '../Components/AddItemMOdal'


function Admindashboard() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
    <div>
        <Navbar />
        <div style={{textAlign:"center", marginTop:"10px"}}>         
         <Button variant='contained' onClick={handleOpen}>Add Item</Button>
        </div>
        {
          open && <AddItemModal close={handleClose}/>
        }
        <ImageSlider />
    </div>
  )
}

export default Admindashboard
