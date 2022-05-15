import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import NavBar from './NavBar'
import Subscribe from '../components/Subscribe'

const Layout: FC = () => {
   return (
      <>
         <NavBar />
         <Outlet />
         <Subscribe />
         <Footer />
      </>
   )
}

export default Layout