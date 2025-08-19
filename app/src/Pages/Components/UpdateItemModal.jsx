import { Box, Button, Modal, Stack, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { BaseUrl, endPoints } from "../../constents";
import Cookies from "js-cookie";


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const UpdateItemModal = ({handleClose , itemId , allItem}) => {
  const {handleSubmit , control , reset } = useForm()
  const [imageURL , setImageURL] = useState()

  const handleImageChange = (event) =>{
   setImageURL(event.target.files[0])
  }


  const onSubmit = async(obj) => {
      const formData = new FormData()
      formData.append("image" , imageURL)

      const pic = await axios.post(`${BaseUrl}${endPoints.image}` , formData , {
        headers : {
          Authorization : `Bearer ${Cookies.get("token")}`,
          "Content-Type" : "multipart/form-data"
        }
      })
      
       const updatedObj = {
        ...obj,
        image : pic.data.url
       }  
       
       const response = await axios.put(`${BaseUrl}${endPoints.updateItem}/${itemId}` , updatedObj , {
        headers : {
          Authorization : `Bearer ${Cookies.get("token")}`
        }
       })
       
       alert("Updated Item Successfully")
       handleClose()
       allItem()
  }
return (
  <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Stack sx={style} component="form" onSubmit={handleSubmit(onSubmit)} textAlign={"center"} spacing={2}>
            <Typography variant='h5'>Add Item</Typography>
          <Controller
           control={control}
           name='itemName'
           render={({field})=>(
            <TextField
             label="Item Name"
             type='text'
             required
             
             {...field}
            />
           )}
          />

          <Controller
           control={control}
           name='itemDesc'
           render={({field})=>(
            <TextField
             label="Item Description"
             type='text'
             required
             
             {...field}
            />
           )}
          />

          <Controller
           control={control}
           name='itemDetails'
           render={({field})=>(
            <TextField
             label="Item Details"
             type='text'
             required
             
             {...field}
            />
           )}
          />

          <Controller
           control={control}
           name='itemPrice'
           render={({field})=>(
            <TextField
             label="Item Price"
             type='text'
             required
             
             {...field}
            />
           )}
          />
          <Button variant="contained" component="label" sx={{marginTop:"10px", marginBottom:"10px"}}>
             Upload Image
             <input
              type="file"
               accept="image/*"
               hidden
               onChange={(event)=>{handleImageChange(event)}}
            />
         </Button>
         <Box>
          <Button variant='contained' fullWidth type='submit'>Add</Button>
         </Box>
        </Stack>
</Modal>
)
}

export default UpdateItemModal





