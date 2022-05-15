import { ActionConstants } from "../store/actions/actionConstants";
import { CartItem } from "./cartState"

export type SetCartAction = {
   type: ActionConstants.SET_BOOK_TO_CART
   payload: CartItem
}

export type DeleteCartAction = {
   type: ActionConstants.DELETE_BOOK_CART
   payload: string
}

export type CartAction = SetCartAction | DeleteCartAction