import { setBooksListAction } from "../../types/booksAction"
import { StateBooks } from "../../types/stateBooks"
import { SET_BOOKS } from "../actions/actionConstants"

const initialState: StateBooks = {
   booksList: [],
}

export const booksReducer = (state = initialState, action: setBooksListAction): StateBooks => {
   switch (action.type) {
      case SET_BOOKS:
         return {
            ...state,
            booksList: action.payload
         }
      default:
         return state
   }
}