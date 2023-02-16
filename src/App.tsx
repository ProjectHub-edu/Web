import { useState } from 'react'
import { Route, Routes } from 'react-router'
import Footer from './layout/Footer'
import Navbar from './layout/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Home Page */}
        <Route path='/' element={<div>Home Page</div>} />

        
      </Routes>
      <Footer />
    </>
  )
}

export default App
