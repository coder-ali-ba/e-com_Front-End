import { Box, Button, Modal, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form';



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
function UpdateItemModal({close}) {
    const{handleSubmit , control , reset}=useForm()
    const [image , setImage] = useState()


    const handleImageChange = (event) =>{
      setImage(event.target.files[0]);
    }
    
    const onSubmit = async(itemDatas) => {
        console.log(itemDatas);
        console.log(image);
        
        
    }

  return (
    <div>
      
      <Modal
        
        onClose={close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        
      >
        <Stack sx={style} component="form" onSubmit={handleSubmit(onSubmit)} textAlign={"center"} spacing={2}>
            <Typography variant='h5'>Update Item</Typography>
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
  )
}

export default UpdateItemModal
