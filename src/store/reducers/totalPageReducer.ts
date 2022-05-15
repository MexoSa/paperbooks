
import { stateTotalCount } from "../../types/stateTotalCount"
import { totalCountAction } from "../../types/totalCountAction"
import { ActionConstants } from "../actions/actionConstants"

const initialState: stateTotalCount = {
   currentPage: 1,
   totalPages: 0,
   totalCount: 0,
}

export const totalPageReducer = (state: stateTotalCount = initialState, action: totalCountAction): stateTotalCount => {
   switch (action.type) {
      case ActionConstants.SET_TOTAL_COUNT:
         return {
            ...state,
            totalCount: action.payload,
            totalPages: Math.ceil(action.payload / 10),
            currentPage: 1,
         }
      case ActionConstants.CLEAR_TOTAL_COUNT:
         return {
            ...state,
            totalCount: 0,
            totalPages: 0,
         }
      case ActionConstants.SET_CURRENT_PAGE:
         return {
            ...state,
            currentPage: action.payload,
         }
      default:
         return state
   }
}