import React from "react"
import { Ibook } from "../types/Ibook"
import empty from '../img/empty.png'
import { useNavigate } from "react-router-dom"

type BookCardProps = {
   book: Ibook
}

const BookCard = ({ book }: BookCardProps): React.ReactElement => {
   const navigate = useNavigate()
   const openBookPage = () => {
      navigate(`/${book.isbn13}`)
   }

   return (
      <div className="book-card" onClick={openBookPage}>
         <div className="image-block">
            <img src={book.image || empty} alt={book.subtitle || 'No description'} />
         </div>
         <h3 className="title-overflow title">{book.title || 'Title not specified'}</h3>
         <p className="book-isbn13">isbn13: {book.isbn13 || 'not specified'}</p>
         <h3>{book.price || 'Price not specified'}</h3>
      </div>
   )
}

export default BookCard