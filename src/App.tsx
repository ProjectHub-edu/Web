import { useState } from 'react'
import { Route, Routes } from 'react-router'
import Footer from './layout/Footer'
import Navbar from './layout/Navbar'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Profile from './pages/Profile'
import Project from './pages/Project'
import './index.scss'
import CreateProject from './pages/CreateProject'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Home Page */}
        <Route path='/' element={<Home />} />

        {/* Project Page */}
        <Route path='/projects/:projectId' element={<Project />} />

        {/* Project Page */}
        <Route path='/create-project' element={<CreateProject />} />

        {/* Profile Page */}
        <Route path='/profile/:userId' element={<Profile />} />

        {/* Not Found Page */}
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
