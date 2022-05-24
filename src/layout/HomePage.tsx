import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { globalState } from '../types/globalState'
import BookCard from '../components/BookCard'
import Loader from '../components/Loader'
import { getBooks } from '../store/actions/booksActions'

const HomePage: FC = () => {
   const booksList = useSelector((state: globalState) => state.booksReducer.booksList)
   const isLoading = useSelector((state: globalState) => state.booksReducer.isLoading)
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(getBooks())
   }, [dispatch])

   return (
      < div className='books-container fg-1 section-margin' >
         <h1 className='title'>New Releases Books</h1>
         {
            isLoading
               ? <Loader />
               : <div className='books-list'>{booksList?.map(book => <BookCard book={book} key={book.isbn13} />)}</div>
         }
      </div >
   )
}

export default HomePage


