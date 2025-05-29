import React from 'react'
import Header from './components/header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/footer/Footer'


function Layout() {
  return (
    
    <>
        <Header />
        <Outlet />
        {/* <LandingPage/> */}
        <Footer/>
    </>
  )
}

export default Layout