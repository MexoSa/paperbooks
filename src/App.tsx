import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BookList from './components/BookList';
import BookPage from './components/BookPage';
import Layout from './layout/Layout';

function App() {
   return (
      <Routes>
         <Route path='/' element={<Layout />} >
            <Route path='/' element={<BookList />} />
            <Route path='/cart' element={<section className='fg-1'>Cart</section>} />
            <Route path='/profile' element={<section className='fg-1'>Profile</section>} />
            <Route path='/:id' element={<BookPage />} />
         </Route>
      </Routes>
   );
}

export default App;
