import { ActionConstants } from "../store/actions/actionConstants"

export type SearchAction = {
   type: ActionConstants.SEARCH,
   payload: string
}

export type ClearSearchValueActions = {
   type: ActionConstants.CLEAR_SEARCH_VALUE,
}

type SearchBookAction = SearchAction | ClearSearchValueActions

export default SearchBookAction