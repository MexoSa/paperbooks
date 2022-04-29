import { SET_BOOKS } from "../store/actions/actionConstants";
import { Ibook } from "./book"

export type setBooksListAction = {
   // type: typeof SET_BOOKS;
   type: string;
   payload?: Ibook[]
}

// или тут просто один тип для всех почти всех экшенов книг