import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Controller, useForm } from 'react-hook-form';
import { Stack, TextField } from '@mui/material';
import axios from 'axios';
import { BaseUrl, endPoints } from '../../constents';
import Cookies from 'js-cookie';
import { BorderOuterRounded } from '@mui/icons-material';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function AddItemModal({close}) {
    const{control , handleSubmit , reset}=useForm()
    const [image , setImage] = React.useState()
  

    const handleImageChange = (event) => {
       setImage(event.target.files[0])
    }
     

   
    
    const onSubmit = async(obj) => {
       
       const formData = new FormData()
       formData.append("image" , image)

       const uploadImage = await axios.post(`${BaseUrl}${endPoints.image}`, formData ,{
        headers : {
          Authorization : `Bearer ${Cookies.get("token")}`,
          'Content-Type': 'multipart/form-data'
        }
       })
      
          
       

         const objtoSend = {
          ...obj,
          image : uploadImage.data.url
         }
       
      const response = await axios.post(`${BaseUrl}${endPoints.addItem}`, objtoSend , {
        headers : {
          Authorization : `Bearer ${Cookies.get("token")}`
        }
      })  
      
     alert(response.data.message)
      
     close()
    }

  return (
    <div>
      
      <Modal
        open={open}
        onClose={close}
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
    </div>
  );
}
