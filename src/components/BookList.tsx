import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Ibook } from '../types/Ibook'
import { globalState } from '../types/globalState'
import BookCard from './BookCard'
import Loader from './Loader'
import NavBookPageContainer from './NavBookPageContainer'
import { useNavigate } from 'react-router-dom'
import { clearSearchValueActions } from '../store/actions/searchBookAction'
import { getBooks } from '../store/actions/booksActions'

function NewBookList(): React.ReactElement {
   const booksList: Ibook[] = useSelector((state: globalState) => state.booksReducer.booksList) as Ibook[] //! Это как работает, без этого не работает?)
   const isLoading: boolean = useSelector((state: globalState) => state.booksReducer.isLoading)
   const searchValue: string = useSelector((state: globalState) => state.searchBookReducer.searchValue)
   const totalPages: number = useSelector((state: globalState) => state.totalPageReducer.totalPages)
   const navigate = useNavigate()
   const dispatch = useDispatch()

   const goHome = () => {
      dispatch(getBooks());
      dispatch(clearSearchValueActions());
      navigate('/')
   }

   return (
      < section className='new-books-container fg-1 section-margin' >
         {
            searchValue
               ? <h1>{`Search results for ${searchValue}`}</h1>
               : <h1 className='title'>New Releases Books</h1>
         }
         {
            booksList.length === 0 && !isLoading && <div className='not-founded'><p>Not Founded</p><button className='button' onClick={goHome}>Go Home</button></div>
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