import { takeEvery, put, call, select } from 'redux-saga/effects';
import { http } from '../../helpers/http';
import { BookInfo } from '../../types/BookInfo';
import { Iresponse } from '../../types/Iresponse';
import { searchBookAction } from '../../types/searchBookAction';
import { GET_FULL_BOOK_INFO, GET_NEW_BOOKS, SEARCH, SET_CURRENT_PAGE } from '../actions/actionConstants';
import { setBookInfo, setBooksList, togleLoading } from '../actions/booksActions';
import { setTotalCount } from '../actions/totalPageActions';


export function* workerNewBooks() {
   yield put(togleLoading())
   try {
      const response: Iresponse = yield call(http, 'https://api.itbook.store/1.0/new');
      yield put(setBooksList(response.books));
   }
   catch (error: any) {
      console.log(error.message);
   }
   finally {
      yield put(togleLoading())
   }
}

export function* workerSearchBook(action: searchBookAction) {
   yield put(togleLoading())
   try {
      const searchList: Iresponse = yield call(http, `https://api.itbook.store/1.0/search/${action.payload}`);
      yield put(setBooksList(searchList.books));
      yield put(setTotalCount(+searchList.total));

   }
   catch (error: any) {
      console.log(error.message);
      yield put(setBooksList([]));
   }
   finally {
      yield put(togleLoading())
   }
}

export function* workerSearchPagePagination(action: searchBookAction) {
   const searchValue = select((state: any) => state.searchBookReducer.searchValue);
   yield put(togleLoading())
   try {
      console.log(action.payload);
      const searchList: Iresponse = yield call(http, `https://api.itbook.store/1.0/search/${searchValue}/${action.payload}`);
      yield put(setBooksList(searchList.books));
   }
   catch (error: any) {
      console.log(error.message);
      yield put(setBooksList([]));
   }
   finally {
      yield put(togleLoading())
   }
}

export function* workerFullBookInfo(action: searchBookAction) {
   try {
      const bookFullInfo: BookInfo = yield call(http, `https://api.itbook.store/1.0/books/${action.payload}`);
      yield put(setBookInfo(bookFullInfo));
      console.log(bookFullInfo);

   }
   catch (error: any) {
      console.log(error.message);
   }
}

export function* watchBooks() {
   yield takeEvery(GET_NEW_BOOKS, workerNewBooks)
   yield takeEvery(SEARCH, workerSearchBook)
   yield takeEvery(SET_CURRENT_PAGE, workerSearchPagePagination)
   yield takeEvery(GET_FULL_BOOK_INFO, workerFullBookInfo)
}

export default function* rootSaga() {
   yield watchBooks();
}