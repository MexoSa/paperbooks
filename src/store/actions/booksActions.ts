import { Ibook } from "../../types/book"
import { setBooksListAction } from "../../types/booksAction"
import { GET_BOOKS, SET_BOOKS } from "./actionConstants"

const getBooks = (): setBooksListAction => {
   return {
      type: GET_BOOKS,
   }
}

const setBooksList = (newsList: Ibook[]): setBooksListAction => {
   return {
      type: SET_BOOKS,
      payload: newsList,
   }
}

export { setBooksList, getBooks }