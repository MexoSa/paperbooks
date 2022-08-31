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
      <Route path='/paperbooks/' element={<Layout />} >
        <Route index element={<HomePage />} />
        <Route path='/paperbooks/search/:searchValue' element={<SearchPage />} />
        <Route path='/paperbooks/cart' element={<CartPage />} />
        <Route path='/paperbooks/:id' element={<BookPage />} />
      </Route>
    </Routes>
  )
}

export default App
