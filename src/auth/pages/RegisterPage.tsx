import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import AuthLayout from '../layout/AuthLayout'
import { Button, Grid, TextField, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

export const RegisterPage = () => {
  return (
    <AuthLayout title='Register'>
      <form action="">
          <Grid container>
            <Grid item xs={12} sx={{mt: 2}}>
              <TextField label='Name' type='text' placeholder='Name' fullWidth/>
            </Grid>
            <Grid item xs={12} sx={{mt: 2}}>
              <TextField label='Email' type='email' placeholder='mail@example.com' fullWidth/>
            </Grid>
            <Grid item xs={12} sx={{mt: 2}}>
              <TextField label='Password' type='password' placeholder='Password' fullWidth/>
            </Grid>
            <Grid container spacing={2} sx={{mb: 2 , mt: 1}}>
              <Grid item xs={12}>
                <Button variant='contained' fullWidth>
                  Create account
                </Button>
              </Grid>
            </Grid>
            <Grid container direction='row' justifyContent='end'>
              <Typography sx={{mr: 1}}>Do you already have an account?</Typography>
              <Link component={RouterLink} color='inherit' to="/auth/login">
                Login
              </Link>
            </Grid>
          </Grid>
        </form>
    </AuthLayout>
  )
}
