import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBooks } from '../store/actions/booksActions';
import { Ibook } from '../types/book'


function Layout(): React.ReactElement {
   const booksListRedux: Ibook[] = useSelector((state: any) => state.booksReducer.booksList)
   const dispatch = useDispatch();

   const getNewBooks = async () => {
      dispatch(getBooks())
   }

   return (
      <div>
         <button onClick={getNewBooks}>Get New Books to ReduxStore</button>
         {
            booksListRedux ? booksListRedux.map(book => <div key={book.title}>{book.title}</div>) : 'Ничего нет'
         }
      </div>
   )
}

export default Layout