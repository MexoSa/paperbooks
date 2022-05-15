import React, { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'
import CartBookItem from '../components/CartBookItem'
import GoHome from '../components/GoHome'
import { CartItem } from '../types/cartState'
import { globalState } from '../types/globalState'

const CartPage: FC = () => {

   const cartList = useSelector((state: globalState) => state.cartReducer.cartList)

   useEffect(() => {
      console.log('Cart')
   }, [])

   return (
      <section className='fg-1 section-margin cart'>
         <h1 className='title'>your cart</h1>
         <div className='cart-list'>
            {
               cartList.length > 0
                  ? cartList.map((book: CartItem) => <CartBookItem key={book.info.isbn13} book={book} />)
                  : <GoHome text='Your cart is empty' />
            }
         </div>
      </section>
   )
}

export default CartPage