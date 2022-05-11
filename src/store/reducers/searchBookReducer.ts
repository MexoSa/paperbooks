import { searchBookAction } from "../../types/searchBookAction"
import { stateSearch } from "../../types/stateSearch"
import { CLEAR_SEARCH_VALUE, SEARCH } from "../actions/actionConstants"

const initialState: stateSearch = {
   searchValue: '',
}

export const searchBookReducer = (state: stateSearch = initialState, action: searchBookAction): stateSearch => {
   switch (action.type) {
      case SEARCH:
         return {
            ...state,
            searchValue: action.payload
         }
      case CLEAR_SEARCH_VALUE:
         return {
            ...state,
            searchValue: ''
         }
      default:
         return state
   }
}
