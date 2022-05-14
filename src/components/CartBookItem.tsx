import React from 'react'
import { CartItem } from '../types/cartState'
import empty from '../img/empty.png'
import { deleteBookCart, setBookToCart } from '../store/actions/cartActions'
import { useDispatch } from 'react-redux'

type CartBookItemProps = {
   book: CartItem
}

function CartBookItem({ book: { item, quantity } }: CartBookItemProps): React.ReactElement {
   const dispatch = useDispatch()
   return (
      <div>
         <div className="cart-item">
            <div className="image-block">
               <img src={item.image || empty} alt={item.subtitle || 'No description'} />
            </div>
            <div className='cart-item-info'>
               <h3 className="title">{item.title || 'Title not specified'}</h3>
               <p className="grey">by: {item.authors || 'not specified'}</p>
               <div className='quantity'>
                  <button onClick={() => dispatch(setBookToCart(item, -1))}>-</button>
                  <p>{quantity}</p>
                  <button onClick={() => dispatch(setBookToCart(item, 1))}>+</button>
               </div>
            </div>
            <div className='price'>
               {
                  `$ ${(+item.price.slice(1) * quantity).toFixed(2)}`
               }
            </div>
            <button className='delete-item' onClick={() => dispatch(deleteBookCart(item.isbn13))}>x</button>
         </div>
      </div>
   )
}

export default CartBookItem