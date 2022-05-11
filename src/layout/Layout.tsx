import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import Subscribe from '../components/Subscribe';
import { getBooks } from '../store/actions/booksActions';

function Layout(): React.ReactElement {
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getBooks())
   }, [dispatch])

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