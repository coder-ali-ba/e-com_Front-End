import axios from 'axios'
import React from 'react'
import { BaseUrl, endPoints } from '../constents.js'
import { Controller, useForm } from 'react-hook-form'
import { Button, Stack, TextField, Typography } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'

function SignUp() {
   const navigate =useNavigate()
    const {control , handleSubmit , reset}=useForm()
    const signUp = async(obj) => {
      try {
       
          const response =await axios.post(`${BaseUrl}${endPoints.signUp}` , obj)
          
          alert(response.data.message)                  
          reset({
               fullName: "",
               email: "",
               password: "",
               phoneNo: ""
            });

          navigate('/login')
         } catch (error) {
            alert(error.message)
         }
      }
  return (
    <div>
      <Stack component='form' onSubmit={handleSubmit(signUp)} width={"400px"} margin={"auto"} padding={"20px"} border={"3px solid blue"} spacing={2}>
        <Typography variant='h4' textAlign={"center"}>SIGNUP</Typography>
        <Controller
            control={control}
            name="fullName"
            render={({field }) => (
              <TextField 
               label='FullName'
               defaultValue=''
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
               defaultValue=''
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
               defaultValue=''
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
               defaultValue=''
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
