import { totalCountAction } from "../../types/totalCountAction"
import { SET_CURRENT_PAGE, SET_TOTAL_COUNT } from "./actionConstants"

const setTotalCount = (totalCount: number): totalCountAction => {
   return {
      type: SET_TOTAL_COUNT,
      payload: totalCount,
   }
}

const clearTotalCount = (): totalCountAction => {
   return {
      type: SET_TOTAL_COUNT,
      payload: 0,
   }
}

const setCurrentPage = (currentPage: number): totalCountAction => {
   return {
      type: SET_CURRENT_PAGE,
      payload: currentPage,
   }
}

export {
   setTotalCount,
   clearTotalCount,
   setCurrentPage
}