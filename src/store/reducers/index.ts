import { combineReducers } from "redux"
import { booksReducer } from "./booksReducer"
import { totalPageReducer } from "./totalPageReducer"
import { searchBookReducer } from "./searchBookReducer"
import { fullBookInfoReducer } from "./fullBookInfoReducer"
import { cartReducer } from "./cartReducer"

const reducers = combineReducers({
   booksReducer,
   totalPageReducer,
   searchBookReducer,
   fullBookInfoReducer,
   cartReducer
})

export default reducers