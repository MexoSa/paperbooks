import { BookInfo } from "./BookInfo";

export type CartItem = {
   item: BookInfo;
   quantity: number;
}

export type cartState = {
   cartList: CartItem[];
}