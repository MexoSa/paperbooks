import BooksAction from "../../types/booksAction"
import { stateBooks } from "../../types/stateBooks"
import { ActionConstants } from "../actions/actionConstants"

const initialState: stateBooks = {
   booksList: [],
   isLoading: false,
   bookInfo: null,
   error: false
}

export const booksReducer = (state: stateBooks = initialState, action: BooksAction): stateBooks => {
   switch (action.type) {
      case ActionConstants.SET_BOOKS:
         return {
            ...state,
            booksList: action.payload,
         }
      case ActionConstants.TOGGLE_LOADING:
         return {
            ...state,
            isLoading: !state.isLoading
         }
      case ActionConstants.SET_ERROR:
         return {
            ...state,
            error: true
         }
      case ActionConstants.CLEAR_ERROR:
         return {
            ...state,
            error: false
         }
      default:
         return state
   }
}
