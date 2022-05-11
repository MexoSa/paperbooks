import { Ibook } from "../../types/Ibook"
import { booksAction, fullBookInfoAction } from "../../types/booksAction"
import { CLEAR_FULL_BOOK_INFO, GET_FULL_BOOK_INFO, GET_NEW_BOOKS, SET_BOOKS, SET_FULL_BOOK_INFO, TOGLE_LOADING } from "./actionConstants"
import { BookInfo } from "../../types/BookInfo"
import { initialState } from "../reducers/fullBookInfoReducer"

const getBooks = (): booksAction => {
   return {
      type: GET_NEW_BOOKS,
   }
}

const setBooksList = (newsList: Ibook[]): booksAction => {
   return {
      type: SET_BOOKS,
      payload: newsList
   }
}

const togleLoading = (): booksAction => {
   return {
      type: TOGLE_LOADING
   }
}

type getFullBookInfoAction = {
   type: string;
   payload: number;
}

const getFullBookInfo = (id: number): getFullBookInfoAction => {
   return {
      type: GET_FULL_BOOK_INFO,
      payload: id
   }
}

const setBookInfo = (bookInfo: BookInfo): fullBookInfoAction => {
   return {
      type: SET_FULL_BOOK_INFO,
      payload: bookInfo
   }
}

const clearFullBookInfo = (): fullBookInfoAction => {
   return {
      type: CLEAR_FULL_BOOK_INFO,
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