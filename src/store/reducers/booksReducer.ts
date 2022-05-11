import { booksAction } from "../../types/booksAction"
import { stateBooks } from "../../types/stateBooks"
import { SET_BOOKS, TOGLE_LOADING } from "../actions/actionConstants"

const initialState: stateBooks = {
   booksList: [],
   isLoading: false,
   bookInfo: null,
}

export const booksReducer = (state: stateBooks = initialState, action: booksAction): stateBooks => {
   switch (action.type) {
      case SET_BOOKS:
         return {
            ...state,
            booksList: action.payload,
         }
      case TOGLE_LOADING:
         return {
            ...state,
            isLoading: !state.isLoading
         }
      default:
         return state
   }
}
