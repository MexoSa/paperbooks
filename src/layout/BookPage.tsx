import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { getFullBookInfo } from '../store/actions/booksActions'
import { globalState } from '../types/globalState'
// import { clearFullBookInfo } from '../store/actions/booksActions'
import SimilarBooks from '../components/SimilarBooks'
import Loader from '../components/Loader'
import FullBookCard from '../components/FullBookCard'
import GoHome from '../components/GoHome'

const BookPage: FC = () => {
   const location = useLocation()
   const id = +location.pathname.split('/')[1]
   const dispatch = useDispatch()

   const bookList = useSelector((state: globalState) => state.booksReducer.booksList)
   const isLoading = useSelector((state: globalState) => state.booksReducer.isLoading)
   const error = useSelector((state: globalState) => state.booksReducer.error)

   useEffect(() => {
      dispatch(getFullBookInfo(id))
   }, [dispatch, id])

   useEffect(() => {
      window.scrollTo(0, 0)
   }, [])

   return (
      <>
         <div className='book-page fg-1 section-margin'>
            {isLoading && <Loader />}
            {!isLoading && error && <GoHome text="Not found this Book" />}
            {!isLoading && !error && <FullBookCard />}
         </div>
         {
            bookList.length > 0 && !isLoading && <SimilarBooks booksList={bookList} />
         }
      </>
   )
}

export default BookPage