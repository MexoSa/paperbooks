import React from 'react'
import { useSelector } from 'react-redux'
import { Ibook } from '../types/Ibook'
import { globalState } from '../types/globalState'
import BookCard from './BookCard'
import Loader from './Loader'
import NavBookPageContainer from './NavBookPageContainer'
import GoHome from './GoHome'

function NewBookList(): React.ReactElement {
   const booksList: Ibook[] = useSelector((state: globalState) => state.booksReducer.booksList) as Ibook[]
   const isLoading: boolean = useSelector((state: globalState) => state.booksReducer.isLoading)
   const searchValue: string = useSelector((state: globalState) => state.searchBookReducer.searchValue)
   const totalPages: number = useSelector((state: globalState) => state.totalPageReducer.totalPages)

   return (
      < section className='new-books-container fg-1 section-margin' >
         {
            searchValue
               ? <h1>{`Search results for ${searchValue}`}</h1>
               : <h1 className='title'>New Releases Books</h1>
         }
         {
            booksList.length === 0 && !isLoading && <GoHome text={"Not Found"} />
         }
         {
            isLoading
               ? <Loader />
               : <div className='new-books-list'>{booksList.map(book => <BookCard book={book} key={book.isbn13} />)}</div>
         }
         {
            totalPages !== 0 && <NavBookPageContainer />
         }
      </section >
   )
}

export default NewBookList