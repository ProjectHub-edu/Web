import React, { FormEventHandler } from 'react'
// import '../features/projects/styles/CreateProject.scss'
import Input from '../features/projects/components/Input'
import { Controller, useForm, useFormContext } from 'react-hook-form';
import { Button, Card, TextField, Typography } from '@mui/material';
import { Box, Container, Stack } from '@mui/system';


const errorTypes = {
  required: 'Must not be empty.',
  pattern: 'Must contain only letters/numbers',
  minLength: 'Minimum length of 3 characters'

}


interface ProjectData {
  title: string;
  description?: string;
  myRole: string;

}

export default function CreateProject() {
  const { register, handleSubmit, formState: { errors } } = useForm<ProjectData>();

  const submitHandler = (data: ProjectData) => {
    const { title, description, myRole } = data;
    const titleFormatted = title.trim();
    const descriptionFormatted = description?.trim();
    const myRoleFormatted = myRole.trim();

    // TODO send request and redirect to the project's page
  }
  return (

    <Box onSubmit={handleSubmit(submitHandler)} width="100vw" display='flex' justifyContent='center' pt={5} component='form' method='post'>
      <Stack borderRadius={3} maxWidth='sm' direction='column' bgcolor='white' alignItems='center' gap={2} p={3} >
        <Typography variant='h3' color='black'>Create Project</Typography>
        <Box>
          <TextField
            {...register("title", { required: true, minLength: 3, pattern: /^[A-Za-z0-9\s]+$/i })}
            error={errors?.title ? true : false}
            helperText={errors.title ? errorTypes[errors.title.type as keyof typeof errorTypes] : '* Must not be empty.'}
            sx={{
              minWidth: '300px'
            }}
            label="Title"
          />
        </Box>
        <Box>
          <TextField
            {...register("myRole", { pattern: /^[A-Za-z0-9\s]+$/i })}
            error={errors?.myRole ? true : false}
            helperText={errors?.myRole ? errorTypes[errors.myRole.type as keyof typeof errorTypes] : ''}
            sx={{
              minWidth: '300px'
            }}
            // error
            id=""
            label="My Role"
          />
        </Box>
        <Box>
          <TextField
            {...register("description")}
            // error={errors?.description ? true : false}
            // helperText={errors?.description ? errorTypes[errors.description.type as keyof typeof errorTypes] : ''}
            label="Description"
            multiline
            minRows={4}
            sx={{
              minWidth: '300px'
            }}
          />
        </Box>
        <Box>
          <Button variant='contained' type='submit'>Create Project</Button>
        </Box>
      </Stack>
    </Box>
  )
}
