import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { globalState } from '../types/globalState'
import { Ibook } from '../types/Ibook'
import Arrow from './Arrow'
import BookCard from './BookCard'
import arrowPrev from '../img/arrowPrev.png';
import arrowNext from '../img/arrowNext.png';

function SimilarBooks(): React.ReactElement {
   const bookList: Ibook[] = useSelector((state: globalState) => state.booksReducer.booksList) as Ibook[]
   const bookInfo = useSelector((state: globalState) => state.fullBookInfoReducer.bookInfo);
   const [similarBook, setSimilarBook] = useState<Ibook[]>([]);
   const [count, setCount] = useState<number>(0);


   useEffect(() => {
      setSimilarBook(bookList.filter(book => book.isbn13 !== bookInfo.isbn13).slice(0 + count, 3 + count))
   }, [count, bookList, bookInfo])

   const changeCount = (changeCount: number): void => {
      if (count + changeCount >= 0 && bookList.length - 1 >= count + changeCount + 3) {
         setCount(prev => prev + changeCount)
      }
   }

   return (
      <section className='similar-books section-margin'>
         <h2 className='title'>Similar Books</h2>
         <div className='control-btn'>
            <Arrow img={arrowPrev} changePage={() => changeCount(-1)} />
            <Arrow img={arrowNext} changePage={() => changeCount(1)} />
         </div>
         <div className='similar-book-content'>
            {
               similarBook.map(book => <BookCard book={book} key={book.isbn13} />)
            }
         </div>
      </section>
   )
}

export default SimilarBooks