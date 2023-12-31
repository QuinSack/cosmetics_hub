import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from '../pages/Home'
import About from '../pages/About'
import Blogs from '../pages/Blogs'

const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/blogs' element={<Blogs />} />
    </Routes>
  )
}

export default Routing