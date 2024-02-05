import React from 'react'
import {ThemeProvider} from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { purpleTheme } from '.'

export default function AppTheme({children}) {
  return (
    <ThemeProvider theme={purpleTheme}>
      {children}
      <CssBaseline/>
    </ThemeProvider>
  )
}
