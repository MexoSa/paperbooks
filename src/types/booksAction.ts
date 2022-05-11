import { BookInfo } from "./BookInfo";
import { Ibook } from "./Ibook"

export type booksAction = {
   type: string;
   payload?: Ibook[];
}

export type fullBookInfoAction = {
   type: string;
   payload: BookInfo;
}
// ! надо ли под каждый экшен создавать свой тип?