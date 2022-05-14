import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import CartBookItem from '../components/CartBookItem'
import { CartItem } from '../types/cartState'
import { globalState } from '../types/globalState'

function Cart() {

   const cartList: CartItem[] = useSelector((state: globalState) => state.cartReducer.cartList)

   useEffect(() => {
      console.log('Cart')
   }, [])

   return (
      <section className='fg-1 section-margin cart'>
         <h1 className='title'>your cart</h1>
         <div className='cart-list'>
            {
               cartList.length > 0
                  ? cartList.map((book: CartItem) => <CartBookItem key={book.item.isbn13} book={book} />)
                  : <p className='empty-cart'>Your cart is empty</p>
            }
         </div>
      </section>
   )
}

export default Cart