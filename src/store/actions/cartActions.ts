import { BookInfo } from "../../types/BookInfo"
import { DeleteCartAction, SetCartAction } from "../../types/cartAction"
import { SET_BOOK_TO_CART, DELETE_BOOK_CART } from "./actionConstants"

const setBookToCart = (book: BookInfo, count: number): SetCartAction => {
   return {
      type: SET_BOOK_TO_CART,
      payload: { item: book, quantity: count }
   }
}

const deleteBookCart = (isbn13: string): DeleteCartAction => {
   return {
      type: DELETE_BOOK_CART,
      payload: isbn13
   }
}

export {
   setBookToCart,
   deleteBookCart
}