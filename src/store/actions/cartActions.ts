import { BookInfo } from "../../types/BookInfo"
import { DeleteCartAction, SetCartAction } from "../../types/cartAction"
import { ActionConstants } from "./actionConstants"

const setBookToCart = (info: BookInfo, count: number): SetCartAction => {
   return {
      type: ActionConstants.SET_BOOK_TO_CART,
      payload: { info: info, quantity: count }
   }
}

const deleteBookCart = (isbn13: string): DeleteCartAction => {
   return {
      type: ActionConstants.DELETE_BOOK_CART,
      payload: isbn13
   }
}

export {
   setBookToCart,
   deleteBookCart
}