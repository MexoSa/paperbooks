import React, { FC } from 'react'
import { CartItem } from '../types/cartState'
import empty from '../img/empty.png'
import { deleteBookCart, setBookToCart } from '../store/actions/cartActions'
import { useDispatch } from 'react-redux'

type CartItemProps = {
  book: CartItem
}

const CartPurchaseItem: FC<CartItemProps> = ({ book: { info, quantity } }) => {
  const dispatch = useDispatch()
  return (
    <div className="cart-item">
      <div className="image-block">
        <img src={info.image || empty} alt={info.subtitle || 'No description'} />
      </div>
      <div className='cart-item-info'>
        <h3 className="title">{info.title || 'Title not specified'}</h3>
        <p className="grey">by: {info.authors || 'not specified'}</p>
        <div className='quantity'>
          <button onClick={() => dispatch(setBookToCart(info, -1))}>-</button>
          <p>{quantity}</p>
          <button onClick={() => dispatch(setBookToCart(info, 1))}>+</button>
        </div>
      </div>
      <div className='price'>
        {
          `$ ${(+info.price.slice(1) * quantity).toFixed(2)}`
        }
      </div>
      <button className='delete-item' onClick={() => dispatch(deleteBookCart(info.isbn13))}>x</button>
    </div>
  )
}

export default CartPurchaseItem