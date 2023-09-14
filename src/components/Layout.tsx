import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Routing from '../routing/Routing'

const Layout = () => {
  return (
    <div>
        <Header />
        <Routing />
        <Footer />
    </div>
  )
}

export default Layout