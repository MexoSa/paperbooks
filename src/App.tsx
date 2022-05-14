import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BookList from './components/BookList';
import BookPage from './components/BookPage';
import Cart from './layout/Cart';
import Layout from './layout/Layout';

function App() {
   return (
      <Routes>
         <Route path='/' element={<Layout />} >
            <Route path='/' element={<BookList />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/profile' element={<section className='fg-1'>Profile</section>} />
            <Route path='/:id' element={<BookPage />} />
            <Route path='/*' element={<div>Page not Found</div>} />
         </Route>
      </Routes>
   );
}

export default App;
