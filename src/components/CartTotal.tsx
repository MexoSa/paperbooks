import React, { FC } from 'react'
import { CartItem } from '../types/cartState'

type CartTotalProps = {
   cartList: CartItem[]
}

const CartTotal: FC<CartTotalProps> = ({ cartList }) => {

   return (
      <div className='cart-total'>
         <div className='cart-total-content'>
            <div className='total-price'>
               Total: ${cartList.reduce((prev, current) => prev + (current.quantity * (+current.info.price.slice(1))), 0).toFixed(2)}
            </div>
            <div className='button'>check out</div>
         </div>
      </div>
   )
}

export default CartTotal