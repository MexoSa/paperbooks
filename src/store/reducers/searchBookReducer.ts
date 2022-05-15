import SearchBookAction from '../../types/searchBookAction'
import { stateSearch } from "../../types/stateSearch"
import { ActionConstants } from "../actions/actionConstants"

const initialState: stateSearch = {
   searchValue: '',
}

export const searchBookReducer = (state: stateSearch = initialState, action: SearchBookAction): stateSearch => {
   switch (action.type) {
      case ActionConstants.SEARCH:
         return {
            ...state,
            searchValue: action.payload
         }
      case ActionConstants.CLEAR_SEARCH_VALUE:
         return {
            ...state,
            searchValue: ''
         }
      default:
         return state
   }
}
