import axios from 'axios'
import React from 'react'
import { BaseUrl, endPoints } from '../constents.js'
import { Controller, useForm } from 'react-hook-form'
import { Button, Stack, TextField, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

function SignUp() {
   
    const {control , handleSubmit , reset}=useForm()
     const signUp = async(obj) => {
        const response =await axios.post(`${BaseUrl}${endPoints.signUp}` , obj)     
        reset()       
    }
  return (
    <div>
      <Stack component='form' onSubmit={handleSubmit(signUp)} width={"400px"} margin={"auto"} padding={"20px"} border={"3px solid blue"}>
        <Typography variant='h4' textAlign={"center"}>SIGNUP</Typography>
        <Controller
            control={control}
            name="fullName"
            render={({field }) => (
              <TextField 
               label='FullName'
               type='text'              
               {...field}
               />
            )}
        />
        <Controller
            control={control}
            name="email"
            render={({field }) => (
              <TextField 
               label='Email'
               type='email'
               {...field}
               />
            )}
        />
        <Controller
            control={control}
            name="password"
            render={({field }) => (
              <TextField 
               label='Password'
               type='password'
               {...field}
               />
            )}
        />
        <Controller
            control={control}
            name="phoneNo"
            render={({field }) => (
              <TextField 
               label='Contact'
               type='text'
               {...field}
               />
            )}
        />

        <Typography>Already have an Account <Link to='/login'>Login</Link></Typography>
        
        <Button variant='contained' type='submit'>SIGNUP</Button>


      </Stack>
    </div>
  )
}

export default SignUp
