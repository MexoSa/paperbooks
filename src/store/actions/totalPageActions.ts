import { totalCountAction } from "../../types/totalCountAction"
import { ActionConstants } from "./actionConstants"

const setTotalCount = (totalCount: number): totalCountAction => {
   return {
      type: ActionConstants.SET_TOTAL_COUNT,
      payload: totalCount,
   }
}

const clearTotalCount = (): totalCountAction => {
   return {
      type: ActionConstants.SET_TOTAL_COUNT,
      payload: 0,
   }
}

const setCurrentPage = (currentPage: number): totalCountAction => {
   return {
      type: ActionConstants.SET_CURRENT_PAGE,
      payload: currentPage,
   }
}

export {
   setTotalCount,
   clearTotalCount,
   setCurrentPage
}