import { takeEvery, put, call } from 'redux-saga/effects';
import { http } from '../../helpers/http';
import { Ibook } from '../../types/book';
import { GET_BOOKS } from '../actions/actionConstants';
import { setBooksList } from '../actions/booksActions';

export function* workerNewBooks() {
   const books: Ibook[] = yield call(http, 'https://api.itbook.store/1.0/new');
   yield put(setBooksList(books))
}

export function* watchBooks() {
   yield takeEvery(GET_BOOKS, workerNewBooks)
}

export default function* rootSaga() {
   yield watchBooks();
}