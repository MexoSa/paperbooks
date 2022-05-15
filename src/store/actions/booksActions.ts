import { Ibook } from "../../types/Ibook"
import BooksAction from "../../types/booksAction"
import { ActionConstants } from "./actionConstants"
import { BookInfo } from "../../types/BookInfo"
import { initialState } from "../reducers/fullBookInfoReducer"

const getBooks = (): BooksAction => {
   return {
      type: ActionConstants.GET_NEW_BOOKS,
   }
}

const setBooksList = (newsList: Ibook[]): BooksAction => {
   return {
      type: ActionConstants.SET_BOOKS,
      payload: newsList
   }
}

const togleLoading = (): BooksAction => {
   return {
      type: ActionConstants.TOGLE_LOADING
   }
}

const getFullBookInfo = (id: number): BooksAction => {
   return {
      type: ActionConstants.GET_FULL_BOOK_INFO,
      payload: id
   }
}

const setBookInfo = (bookInfo: BookInfo): BooksAction => {
   return {
      type: ActionConstants.SET_FULL_BOOK_INFO,
      payload: bookInfo
   }
}

const clearFullBookInfo = (): BooksAction => {
   return {
      type: ActionConstants.CLEAR_FULL_BOOK_INFO,
      payload: initialState.bookInfo
   }
}

export {
   setBooksList,
   getBooks,
   togleLoading,
   getFullBookInfo,
   setBookInfo,
   clearFullBookInfo
}