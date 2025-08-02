import { Button, Stack, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { BaseUrl, endPoints } from '../constents.js'

function Login() {
  const {control , handleSubmit , reset} =useForm()
  const navigate =useNavigate()

  const login = async(obj)=>{
    try {
      const response = await axios.post(`${BaseUrl}${endPoints.logIn}`, obj)
      alert(response.data.message)
      
      const check=response.data.data.userType

      if(check == "admin"){
         navigate('/admin-dashboard')
      }else{
        navigate('/client-dashboard')
      }
      
      reset({
        email : '',
        password : ''
      })
    } catch (error) {
      alert(error.message)
    }  
  }

  return (
    <div>
      <Stack component='form' onSubmit={handleSubmit(login)} width={"400px"} margin={"auto"} padding={"20px"} border={"2px solid blue"} spacing={2}>
        <Typography textAlign={"center"} variant='h4'>LOGIN</Typography>
        <Controller
          control={control}
          name='email'
          render={({field})=>(
            <TextField
            label='Email'
            type='email'
            defaultValue=""
            {...field}
            />
          )}       
        />
        <Controller
          control={control}
          name='password'
          render={({field})=>(
            <TextField
            label='Password'
            type='password'
            defaultValue=""
            {...field}
            />
          )}       
        />

        <Typography>Don't have an account <Link to='/signup'>SignUp</Link></Typography>
        <Button type='submit' variant='contained'>LOGIN</Button>
      </Stack>
    </div>
  )
}

export default Login
