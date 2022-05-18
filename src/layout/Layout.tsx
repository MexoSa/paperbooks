import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import NavBar from './NavBar'
import Subscribe from '../components/Subscribe'
import ToTopBtn from '../components/ToTopBtn'

const Layout: FC = () => {
   return (
      <>
         <NavBar />
         <Outlet />
         <Subscribe />
         <ToTopBtn />
         <Footer />
      </>
   )
}

export default Layout