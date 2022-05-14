import { DELETE_BOOK_CART, SET_BOOK_TO_CART } from "../store/actions/actionConstants";
import { CartItem } from "./cartState";

export type SetCartAction = {
   type: typeof SET_BOOK_TO_CART;
   payload: CartItem;
}

export type DeleteCartAction = {
   type: typeof DELETE_BOOK_CART;
   payload: string;
}

export type CartAction = SetCartAction | DeleteCartAction;