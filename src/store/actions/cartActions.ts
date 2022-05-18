import { BookInfo } from "../../types/BookInfo"
import { CartAction } from "../../types/cartAction"
import { ActionConstants } from "./actionConstants"

const setBookToCart = (info: BookInfo, count: number): CartAction => {
   return {
      type: ActionConstants.SET_BOOK_TO_CART,
      payload: { info: info, quantity: count }
   }
}

const deleteBookCart = (isbn13: string): CartAction => {
   return {
      type: ActionConstants.DELETE_BOOK_CART,
      payload: isbn13
   }
}

export {
   setBookToCart,
   deleteBookCart
}