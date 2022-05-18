import { BookInfo } from "./BookInfo"
import { Ibook } from "./Ibook"

export type stateBooks = {
   booksList: Ibook[]
   isLoading: boolean
   bookInfo: BookInfo | null
   error: boolean
}