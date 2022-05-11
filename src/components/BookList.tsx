import React from 'react'
import { useSelector } from 'react-redux'
import { Ibook } from '../types/Ibook'
import { globalState } from '../types/globalState'
import BookCard from './BookCard'
import Loader from './Loader'
import NavBookPageContainer from './NavBookPageContainer'

function NewBookList() {
   const booksList: Ibook[] = useSelector((state: globalState) => state.booksReducer.booksList) as Ibook[] //! Это как работает, без этого не работает?)
   const isLoading: boolean = useSelector((state: globalState) => state.booksReducer.isLoading)
   const searchValue: string = useSelector((state: globalState) => state.searchBookReducer.searchValue)
   const totalPages: number = useSelector((state: globalState) => state.totalPageReducer.totalPages)

   return (
      < section className='new-books-container fg-1 section-margin' >
         {
            searchValue
               ? <h1>Search results for "{searchValue}"</h1>
               : <h1 className='new-books-title'>New Releases Books</h1>
         }

         <div className='new-books-list'>
            {
               // ! А если ошибка, или нет книг, то как вывести об этом сообщение тут
               isLoading
                  ? <Loader />
                  : booksList.map(book => <BookCard book={book} key={book.isbn13} />)
            }
         </div>
         {
            totalPages
               ? <NavBookPageContainer />
               : null
         }
      </section >
   )
}

export default NewBookList