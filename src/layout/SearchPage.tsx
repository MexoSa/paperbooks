import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import BookCard from '../components/BookCard'
import GoHome from '../components/GoHome'
import Loader from '../components/Loader'
import PaginationContainer from '../components/PaginationContainer'
import { searchBookActions } from '../store/actions/searchBookAction'
import { globalState } from '../types/globalState'

const SearchPage: FC = () => {
   const booksList = useSelector((state: globalState) => state.booksReducer.booksList)
   const isLoading = useSelector((state: globalState) => state.booksReducer.isLoading)
   const totalPages = useSelector((state: globalState) => state.totalPageReducer.totalPages)

   const location = useLocation()
   const searchValue = location.pathname.split('/')[2]
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(searchBookActions(searchValue))
   }, [searchValue, dispatch])

   return (
      <>
         < div className='books-container fg-1 section-margin' >
            <h1 className='title'>Search results for: <span className='search-value grey'>{decodeURI(searchValue)}</span></h1>
            {booksList.length === 0 && !isLoading && <GoHome text="Not Found" />}
            {
               isLoading
                  ? <Loader />
                  : <div className='books-list'>{booksList.map(book => <BookCard book={book} key={book.isbn13} />)}</div>
            }
         </div >
         {totalPages !== 0 && <PaginationContainer />}
      </>
   )
}

export default SearchPage