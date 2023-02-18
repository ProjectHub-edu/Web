import React from 'react'
import '../features/projects/styles/CreateProject.scss'
import Input from '../features/projects/components/Input'
import Button from '../components/Button'

export default function CreateProject() {
  return (
    <div className='form-container'>
      <form method='post'>
        <h2 style={{
          color: "white"
        }}>Create new project</h2>
        <Input label='Project Title' />
        <Input label='Project Decsription' />
        <Input label='My Role' />
        <Button >Create Project</Button>
      </form>
    </div>
  )
}
