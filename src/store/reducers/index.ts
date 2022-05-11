import { combineReducers } from "redux";
import { booksReducer } from "./booksReducer";
import { totalPageReducer } from "./totalPageReducer";
import { searchBookReducer } from "./searchBookReducer";
import { fullBookInfoReducer } from "./fullBookInfoReducer";

const reducers = combineReducers({
   booksReducer,
   totalPageReducer,
   searchBookReducer,
   fullBookInfoReducer
});

export default reducers;