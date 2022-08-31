import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { Ibook } from '../types/Ibook'

type SearchTipListProp = {
  searchTipList: Ibook[]
}

const SearchTipList: FC<SearchTipListProp> = ({ searchTipList }) => {
  return (
    <div className='search-tips'>
      {
        searchTipList[0].title === "not found"
          ?
          <p>Not Found</p>
          :
          searchTipList.map(book =>
            <Link to={`/paperbooks/${book.isbn13}`} key={book.isbn13} className='tip'>
              <div className='image-block'>
                <img src={book.image} alt={book.title} />
              </div>
              <p>{book.title}</p>
            </Link>)
      }
    </div>
  )
}

export default SearchTipList