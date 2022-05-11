import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getFullBookInfo } from '../store/actions/booksActions';
import { globalState } from '../types/globalState';
import { clearFullBookInfo } from '../store/actions/booksActions';
import empty from '../img/empty.png'
import SimilarBooks from './SimilarBooks';

function BookPage() {
   const location = useLocation();
   const id = +location.pathname.split('/')[1];
   const dispatch = useDispatch();

   const bookInfo = useSelector((state: globalState) => state.fullBookInfoReducer.bookInfo);

   useEffect(() => {
      dispatch(clearFullBookInfo());
      dispatch(getFullBookInfo(id));
   }, [dispatch, id]);

   return (
      <>
         <section className='book-page fg-1 section-margin'>
            <h1 className='book-page-title'>{bookInfo?.title}</h1>
            <div className='book-page-main-content'>
               <div className="image-block">
                  <img src={bookInfo.image || empty} alt={bookInfo.image || 'No description'} />
               </div>
               <div className="book-page-info">
                  <div className='book-price'>{bookInfo?.price}</div>
                  <div className='details-info'>
                     <div className='flex'>
                        <p className='grey'>Authors</p>
                        <p>{bookInfo.authors}</p>
                     </div>
                     <div className='flex'>
                        <p className='grey'>Publisher</p>
                        <p>{bookInfo.publisher}</p>
                     </div>
                     <div className='flex'>
                        <p className='grey'>Language</p>
                        <p>{bookInfo.language}</p>
                     </div>
                     <div className='flex'>
                        <p className='grey'>Year</p>
                        <p>{bookInfo.year}</p>
                     </div>
                  </div>
                  <button className='book-page-button button'>Add to cart</button>
               </div>
            </div>
            <div className='book-page-description'>
               <h2 className='book-page-description-title'>Description</h2>
               <p>
                  {bookInfo.desc}
               </p>
            </div>
         </section>
         <SimilarBooks />
      </>
   )
}

export default BookPage