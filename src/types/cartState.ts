import { BookInfo } from "./BookInfo"

export type CartItem = {
   info: BookInfo
   quantity: number
}

export type cartState = {
   cartList: CartItem[]
   isModalOpen: boolean
}