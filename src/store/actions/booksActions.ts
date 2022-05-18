import { Ibook } from "../../types/Ibook"
import BooksAction from "../../types/booksAction"
import { ActionConstants } from "./actionConstants"
import { BookInfo } from "../../types/BookInfo"
// import { initialState } from "../reducers/fullBookInfoReducer"

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

const toggleLoading = (): BooksAction => {
   return {
      type: ActionConstants.TOGGLE_LOADING
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

const setError = (): BooksAction => {
   return {
      type: ActionConstants.SET_ERROR,
   }
}

const clearError = (): BooksAction => {
   return {
      type: ActionConstants.CLEAR_ERROR,
   }
}

// const clearFullBookInfo = (): BooksAction => {
//    return {
//       type: ActionConstants.CLEAR_FULL_BOOK_INFO,
//       payload: initialState.bookInfo
//    }
// }

export {
   setBooksList,
   getBooks,
   toggleLoading,
   getFullBookInfo,
   setBookInfo,
   setError,
   clearError,
   // clearFullBookInfo
}