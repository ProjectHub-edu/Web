import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import './Footer.scss'

export default function Footer() {
  return (

    <Box component='footer' bgcolor='primary' sx={{
      backgroundColor: '#1876D2'
    }}>
      <Typography variant='body1' color='white'>© All rights reserved</Typography>
    </Box>
  )
}
