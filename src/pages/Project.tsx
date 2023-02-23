import { Box, Stack } from '@mui/system'
import img from '../features/projects/assets/img_placeholder.png'
import profileIcon from '../features/projects/assets/profile.webp'
import React from 'react'
import { Typography } from '@mui/material'
import { AccountCircle } from '@mui/icons-material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faUser, faUserCircle, faUsersCog } from '@fortawesome/free-solid-svg-icons'
import Roles from '../features/projects/components/Roles'

export default function Project() {
  return (
    <Stack direction={'row'} p={5}>
      <Stack direction={'row'} gap={3}>
        <img src={img} alt="" height={400} />
        <Stack direction={'column'} alignItems='flex-start' gap={1}>
          <Typography variant='h2' fontWeight={400}>Project Hub</Typography>
          <Typography variant='body2'>3 days ago</Typography>
          <Typography variant='h5' >Status: In Progress</Typography>
        </Stack>
      </Stack>
      {/* roles container */}
      <Roles />
    </Stack>
  )
}
