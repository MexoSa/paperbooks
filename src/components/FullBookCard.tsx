import React, { FC, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { globalState } from '../types/globalState'
import empty from '../img/empty.png'
import { setBookToCart } from '../store/actions/cartActions'

const FullBookCard: FC = () => {
  const bookInfo = useSelector((state: globalState) => state.fullBookInfoReducer.bookInfo)
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(1)

  const changeQuantity = (num: number) => {
    if (quantity + num > 0) {
      setQuantity(prev => prev + num)
    }
  }

  const addToCart = () => {
    dispatch(setBookToCart(bookInfo, quantity))
    setQuantity(1)
  }

  return (
    <>
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
          <button className='book-page-button button' onClick={addToCart}>Add to cart</button>
          <div className='flex'>
            <button className='button' onClick={() => changeQuantity(-1)}>-</button>
            <span className='center'>{`Quantity: ${quantity}`}</span>
            <button className='button' onClick={() => changeQuantity(1)}>+</button>
          </div>

        </div>
      </div>
      <div className='book-page-description'>
        <h2 className='title'>Description</h2>
        <p>
          {bookInfo.desc || 'No description'}
        </p>
      </div>
    </>
  )
}

export default FullBookCard