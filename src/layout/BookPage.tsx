import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { getFullBookInfo } from '../store/actions/booksActions'
import { globalState } from '../types/globalState'
import { clearFullBookInfo } from '../store/actions/booksActions'
import empty from '../img/empty.png'
import SimilarBooks from '../components/SimilarBooks'
import { setBookToCart } from '../store/actions/cartActions'

const BookPage: FC = () => {
   const location = useLocation()
   const id = +location.pathname.split('/')[1]
   const dispatch = useDispatch()

   const bookInfo = useSelector((state: globalState) => state.fullBookInfoReducer.bookInfo)
   const bookList = useSelector((state: globalState) => state.booksReducer.booksList)

   useEffect(() => {
      dispatch(clearFullBookInfo())
      dispatch(getFullBookInfo(id))
   }, [dispatch, id])

   useEffect(() => {
      window.scrollTo(0, 0)
   }, [])

   return (
      <>
         <div className='book-page fg-1 section-margin'>
            <h1 className='title'>{bookInfo.title}</h1>
            <div className='book-page-main-content'>
               <div className="image-block">
                  <img src={bookInfo.image || empty} alt={bookInfo.image || 'No description'} />
               </div>
               <div className="book-page-info">
                  <div className='book-price'>{bookInfo.price || 'Not defined'}</div>
                  <div className='details-info'>
                     <div className='flex'>
                        <p className='grey'>Authors</p>
                        <p>{bookInfo.authors || 'Not defined'}</p>
                     </div>
                     <div className='flex'>
                        <p className='grey'>Publisher</p>
                        <p>{bookInfo.publisher || 'Not defined'}</p>
                     </div>
                     <div className='flex'>
                        <p className='grey'>Language</p>
                        <p>{bookInfo.language || 'Not defined'}</p>
                     </div>
                     <div className='flex'>
                        <p className='grey'>Year</p>
                        <p>{bookInfo.year || 'Not defined'}</p>
                     </div>
                  </div>
                  <button className='book-page-button button' onClick={() => dispatch(setBookToCart(bookInfo, 1))}>Add to cart</button>
               </div>
            </div>
            <div className='book-page-description'>
               <h2 className='title'>Description</h2>
               <p>
                  {bookInfo.desc || 'No description'}
               </p>
            </div>
         </div>
         {/* а тут поменять, сделать условие на отрисовку и вынести что сверху в отдельный компонент*/}
         {
            bookList.length > 0 && <SimilarBooks booksList={bookList} />
         }

      </>
   )
}

export default BookPage