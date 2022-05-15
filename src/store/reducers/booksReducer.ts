import BooksAction from "../../types/booksAction"
import { stateBooks } from "../../types/stateBooks"
import { ActionConstants } from "../actions/actionConstants"

const initialState: stateBooks = {
   booksList: [],
   isLoading: false,
   bookInfo: null,
}

export const booksReducer = (state: stateBooks = initialState, action: BooksAction): stateBooks => {
   switch (action.type) {
      case ActionConstants.SET_BOOKS:
         return {
            ...state,
            booksList: action.payload,
         }
      case ActionConstants.TOGLE_LOADING:
         return {
            ...state,
            isLoading: !state.isLoading
         }
      default:
         return state
   }
}
