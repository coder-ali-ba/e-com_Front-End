import React, { useEffect, useState } from 'react'
import Navbar from './Components/NavebarComp'
import ImageSlider from './Components/Slider'
import axios from 'axios'
import { BaseUrl, endPoints } from '../constents.js'
import { Button, Card, CardActions, CardContent, CardMedia, Stack, Typography } from '@mui/material'
import Cookies from 'js-cookie'



function AllItems() {
  const [items , setItems] = useState([])
  useEffect(()=>{
    getItems()
  })
  const getItems = async () => {
    const response = await axios.get(`${BaseUrl}${endPoints.getAllItems}`)
    setItems(response.data.data)   
  }

  const toggleStatus = async(id) => {
     console.log(id);
     const response = await axios.patch(`${BaseUrl}${endPoints.changeStatus}/${id}`,{},{
      headers : {
        Authorization : `Bearer ${Cookies.get("token")}`
      }
     })  
     console.log(response);
        
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
        <Stack width={"100%"} maxWidth={"1024px"} margin={"auto"}>        
          <h1>All items</h1>
          <Stack direction={"row"} gap={"10px"} flexWrap={"wrap"}>
          {
            items.map((item)=>(
              <Card sx={{ maxWidth: 345 }} key={item._id}>
                 <CardMedia
                   component="img"
                   alt="green iguana"
                   height="140"
                   image={item.image}
                 />
                 <CardContent>
                   <Typography gutterBottom variant="h5" component="div">
                    Item Name <strong>{item.itemName}</strong> 
                   </Typography>
                   <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                     <strong>Description</strong> {item.itemDesc}
                   </Typography>
                   <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                     <strong>Details</strong> {item.itemDetails}
                   </Typography>
                   <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                     <strong>Price</strong> {item.itemPrice}
                   </Typography>
                   <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                     <strong>Is Available</strong> {item.isAvailable}
                   </Typography>
                 </CardContent>
                 <CardActions>
                   <Button variant='contained' size="small">update</Button>
                   <Button variant='contained' size="small" sx={{bgcolor:"orange"}} onClick={()=>toggleStatus(item._id)}>toggle</Button>
                   <Button variant='contained' size="small" sx={{bgcolor:"red"}}>delete</Button>
                 </CardActions>
               </Card>
            ))
          }
          </Stack>
        </Stack>       
    </div>
  )
}

export default AllItems
