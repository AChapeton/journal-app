import { Google } from '@mui/icons-material'
import {Link as RouterLink} from 'react-router-dom'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import React, { useMemo } from 'react'
import AuthLayout from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import { useDispatch, useSelector } from 'react-redux'
import { checkingAuthentication, startGoogleSignIn } from '../../store/authStore'

export const LoginPage = () => {
  const {email, password, onInputChange} = useForm({
    email: 'andres@gmail.com',
    password: '1234'
  })

  const {status} = useSelector(state => state.auth)

  const isAuthenticating = useMemo(() => status === 'checking', [status])

  const dispatch = useDispatch()

  const onSubmit = (event) => {
    event.preventDefault()
    dispatch(checkingAuthentication())
    console.log(email, password)
  }

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn())
    console.log('onGoogleSignIn')
  }

  return (
    <AuthLayout title='Login'>
      <form onSubmit={onSubmit} action="">
          <Grid container>
            <Grid item xs={12} sx={{mt: 2}}>
              <TextField 
                label='Email' 
                type='email' 
                placeholder='mail@example.com' 
                fullWidth
                name='email'
                value={email}
                onChange={onInputChange}
              />
            </Grid>
            <Grid item xs={12} sx={{mt: 2}}>
              <TextField 
                label='Password' 
                type='password' 
                placeholder='Password' 
                fullWidth 
                name='password'
                value={password}
                onChange={onInputChange}/>
            </Grid>
            <Grid container spacing={2} sx={{mb: 2 , mt: 1}}>
              <Grid item xs={12} sm={6}>
                <Button
                  disabled={isAuthenticating} 
                  type='submit' 
                  variant='contained' 
                  fullWidth
                >
                  Login
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                  <Button 
                    disabled={isAuthenticating}
                    variant='contained' 
                    fullWidth
                    onClick={onGoogleSignIn}
                  >
                    <Google/>
                    <Typography sx={{ml: 1}}>Google</Typography>
                  </Button>
                </Grid>
            </Grid>
            <Grid container direction='row' justifyContent='end'>
              <Link component={RouterLink} color='inherit' to="/auth/register">
                Create an account
              </Link>
            </Grid>
          </Grid>
        </form>
    </AuthLayout>
  )
}
