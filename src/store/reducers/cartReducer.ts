import { CartAction } from "../../types/cartAction"
import { cartState } from "../../types/cartState"
import { ActionConstants } from "../actions/actionConstants"

const initialState: cartState = {
   cartList: [],
}

export const cartReducer = (state: cartState = initialState, action: CartAction): cartState => {
   switch (action.type) {
      case ActionConstants.SET_BOOK_TO_CART:
         if (state.cartList.find(cartItem => cartItem.info.isbn13 === action.payload.info.isbn13)) {
            return {
               ...state,
               cartList: state.cartList.map(cartItem => {
                  const finalQuantity = cartItem.quantity + action.payload.quantity
                  if (cartItem.info.isbn13 === action.payload.info.isbn13 && finalQuantity > 0) {
                     return {
                        ...cartItem,
                        quantity: finalQuantity,
                     }
                  }
                  return cartItem
               })
            }
         } else {
            return {
               ...state,
               cartList: [...state.cartList, action.payload],
            }
         }
      case ActionConstants.DELETE_BOOK_CART:
         return {
            ...state,
            cartList: state.cartList.filter(cartItem => cartItem.info.isbn13 !== action.payload),
         }
      default:
         return state
   }
}