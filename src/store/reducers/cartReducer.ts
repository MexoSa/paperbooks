
import { CartAction } from "../../types/cartAction";
import { cartState } from "../../types/cartState";
import { DELETE_BOOK_CART, SET_BOOK_TO_CART } from "../actions/actionConstants"

const initialState: cartState = {
   cartList: [],
}

export const cartReducer = (state: cartState = initialState, action: CartAction): cartState => {
   switch (action.type) {
      case SET_BOOK_TO_CART:
         if (state.cartList.find(item => item.item.isbn13 === action.payload.item.isbn13)) {
            return {
               ...state,
               cartList: state.cartList.map(item => {
                  if (item.item.isbn13 === action.payload.item.isbn13 && item.quantity + action.payload.quantity > 0) {
                     return {
                        ...item,
                        quantity: item.quantity + action.payload.quantity,
                     }
                  }
                  return item
               })
            }
         } else {
            return {
               ...state,
               cartList: [...state.cartList, action.payload],
            }
         }
      case DELETE_BOOK_CART:
         return {
            ...state,
            cartList: state.cartList.filter(item => item.item.isbn13 !== action.payload),
         }
      default:
         return state
   }
}