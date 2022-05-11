import { IsearchBookActions } from "../../types/IsearchAction"
import { ClearSearchValueActions } from "../../types/searchBookAction"
import { CLEAR_SEARCH_VALUE, SEARCH } from "./actionConstants"

export const searchBookActions = (searchValue: string): IsearchBookActions => {
   return {
      type: SEARCH,
      payload: searchValue
   }
}

export const clearSearchValueActions = (): ClearSearchValueActions => {
   return {
      type: CLEAR_SEARCH_VALUE,
   }
}