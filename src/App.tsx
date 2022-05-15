import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './layout/HomePage'
import BookPage from './layout/BookPage'
import CartPage from './layout/CartPage'
import Layout from './layout/Layout'
import SearchPage from './layout/SearchPage'

function App() {
   return (
      <Routes>
         <Route path='/' element={<Layout />} >
            <Route path='/' element={<HomePage />} />
            <Route path='/search/:searchValue' element={<SearchPage />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path='/profile' element={<section className='fg-1'>Profile</section>} />
            <Route path='/:id' element={<BookPage />} />
         </Route>
      </Routes>
   )
}

export default App
