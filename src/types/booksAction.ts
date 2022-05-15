import { ActionConstants } from "../store/actions/actionConstants"
import { BookInfo } from "./BookInfo"
import { Ibook } from "./Ibook"

export type SetBooksListAction = {
   type: ActionConstants.SET_BOOKS
   payload: Ibook[]
}

export type GetNewBooksAction = {
   type: ActionConstants.GET_NEW_BOOKS
}

export type TogleLoadingAction = {
   type: ActionConstants.TOGLE_LOADING
}

export type GetFullBookInfoAction = {
   type: ActionConstants.GET_FULL_BOOK_INFO
   payload: number
}

export type SetBookInfoAction = {
   type: ActionConstants.SET_FULL_BOOK_INFO
   payload: BookInfo
}

export type ClearFullBookInfoAction = {
   type: ActionConstants.CLEAR_FULL_BOOK_INFO
   payload: BookInfo
}

type BooksAction = SetBooksListAction |
   GetNewBooksAction |
   TogleLoadingAction |
   GetFullBookInfoAction |
   SetBookInfoAction |
   ClearFullBookInfoAction

export default BooksAction