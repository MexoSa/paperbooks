import SearchBookAction from '../../types/searchBookAction'
import { ActionConstants } from "./actionConstants"

export const searchBookActions = (searchValue: string): SearchBookAction => {
   return {
      type: ActionConstants.SEARCH,
      payload: searchValue
   }
}

export const clearSearchValueActions = (): SearchBookAction => {
   return {
      type: ActionConstants.CLEAR_SEARCH_VALUE,
   }
}