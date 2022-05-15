import BooksAction from "../../types/booksAction"
import { stateFullBookInfo } from "../../types/stateFullBookInfo"
import { ActionConstants } from "../actions/actionConstants"

export const initialState: stateFullBookInfo = {
   bookInfo: {
      authors: "",
      desc: "",
      image: "",
      isbn10: "",
      isbn13: "",
      language: "",
      pages: "",
      pdf: "",
      price: "",
      publisher: "",
      rating: "",
      subtitle: "",
      title: "",
      url: "",
      year: "",
   }
}

export const fullBookInfoReducer = (state: stateFullBookInfo = initialState, action: BooksAction): stateFullBookInfo => {
   switch (action.type) {
      case ActionConstants.SET_FULL_BOOK_INFO:
         return {
            ...state,
            bookInfo: action.payload,
         }
      case ActionConstants.CLEAR_FULL_BOOK_INFO:
         return {
            ...state,
            bookInfo: initialState.bookInfo,
         }
      default:
         return state
   }
}
