import { cartState } from './cartState';
import { stateBooks } from './stateBooks';
import { stateFullBookInfo } from './stateFullBookInfo';
import { stateSearch } from './stateSearch';
import { stateTotalCount } from './stateTotalCount';

export type globalState = {
   booksReducer: stateBooks,
   totalPageReducer: stateTotalCount,
   searchBookReducer: stateSearch,
   fullBookInfoReducer: stateFullBookInfo
   cartReducer: cartState
}