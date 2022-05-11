import { fullBookInfoAction } from "../../types/booksAction"
import { stateFullBookInfo } from "../../types/stateFullBookInfo"
import { CLEAR_FULL_BOOK_INFO, SET_FULL_BOOK_INFO } from "../actions/actionConstants"

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
   },
}

export const fullBookInfoReducer = (state: stateFullBookInfo = initialState, action: fullBookInfoAction): stateFullBookInfo => {
   switch (action.type) {
      case SET_FULL_BOOK_INFO:
         return {
            ...state,
            bookInfo: action.payload,
         }
      case CLEAR_FULL_BOOK_INFO:
         return {
            ...state,
            bookInfo: initialState.bookInfo,
         }
      default:
         return state
   }
}
