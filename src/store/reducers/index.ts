import { combineReducers } from "redux";
import { booksReducer } from "./booksReducer";

const reducers = combineReducers({
   booksReducer,
});

export default reducers;