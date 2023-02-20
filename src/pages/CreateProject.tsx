import React from 'react'
// import '../features/projects/styles/CreateProject.scss'
import Input from '../features/projects/components/Input'
import { Controller, useForm } from 'react-hook-form';
import { Button, Card, TextField, Typography } from '@mui/material';
import { Box, Container, Stack } from '@mui/system';

export default function CreateProject() {
  const { register, handleSubmit, control } = useForm();
  return (

    // <Box component='form' sx={{
    //   backgroundColor: 'white',
    //   p: 1,
    //   display: 'flex',
    //   flexDirection: 'column',
    //   alignItems: 'center',
    //   gap: 1,
    // }}>


    // </Box>
    <Box width="100vw" display='flex' justifyContent='center' pt={5} component='form'>
      <Stack borderRadius={3} maxWidth='sm' direction='column' bgcolor='white' alignItems='center' gap={2} p={3} >
        <Typography variant='h3' color='black'>Create Project</Typography>
        <Box>
          <TextField
            sx={{
              minWidth: '300px'
            }}
            // error
            id=""
            label="Title"
          // defaultValue=""
          />
        </Box>
        <Box>
          <TextField
            sx={{
              minWidth: '300px'
            }}
            // error
            id=""
            label="My Role"
          // defaultValue=""
          />
        </Box>
        <Box>
          <TextField
            // error
            id=""
            label="Description"
            multiline
            minRows={4}
            sx={{
              minWidth: '300px'
            }}
          // defaultValue=""
          />
        </Box>
        <Box>
          <Button variant='contained'>Create Project</Button>
        </Box>
      </Stack>
    </Box>
  )
}
