import { put,call, takeEvery, all } from 'redux-saga/effects';
import { REDUCER_OPERATIONS } from './StringConstants';
import { act } from 'react-dom/test-utils';
import axios from '../components/Axios';
import { useSelector } from 'react-redux';

 
function*  authenticate(action) {
  console.log(action)
  try {
      const users = yield call(axios.post,'http://localhost:8081/authenticate',action.payload);
      console.log(users);
     
    const token=users.data.token;

    console.log(token);
   
    localStorage.setItem('authtoken', token)
      yield put({type: REDUCER_OPERATIONS.LOAD_AUTHENTICATE_TOKEN_SUCCESS, data: users.data.token});
  } catch (e) {
      yield put({type: REDUCER_OPERATIONS.LOAD_USERS_ERROR, error: e.message});
  }
}
 export function* authenticateSaga() {
   
    yield takeEvery(REDUCER_OPERATIONS.LOAD_AUTHENTICATE_TOKEN_REQUEST, authenticate);
     
 }

 function* fetchallBooksDetails() {
  try {
    const users = yield call(axios.get,'http://localhost:8081/book');
      console.log(users);
      yield put({type: REDUCER_OPERATIONS.LOAD_ALL_BOOKS_DETAILS_SUCCESS, data: users.data});
  } catch (e) {
      yield put({type: REDUCER_OPERATIONS.LOAD_USERS_ERROR, error: e.message});
  }
}
export function* allBooksDetailsSaga() {
   
   yield takeEvery(REDUCER_OPERATIONS.LOAD_ALL_BOOKS_DETAILS_REQUEST, fetchallBooksDetails);
    
}
function* fetchallUsersDetailsDetails() {
    try {
        const users = yield call(axios.get,'http://localhost:8081/user');
        console.log(users)
        yield put({type: REDUCER_OPERATIONS.LOAD_ALL_USERS_DETAILS_SUCCESS, data: users.data});
    } catch (e) {
        yield put({type: REDUCER_OPERATIONS.LOAD_USERS_ERROR, error: e.message});
    }
 }
export function* allUsersDetailsSaga() {
   
    yield takeEvery(REDUCER_OPERATIONS.LOAD_ALL_USERS_DETAILS_REQUEST, fetchallUsersDetailsDetails);
     
 }
 function*  addBook(action) {
  try {
      const users = yield call(axios.post,'http://localhost:8081/saveBook',action.payload);
      console.log(users);
      yield put({type: REDUCER_OPERATIONS.LOAD_ADD_BOOK_SUCCESS, data: users.data});
  } catch (e) {
      yield put({type: REDUCER_OPERATIONS.LOAD_USERS_ERROR, error: e.message});
  }
}
 export function* addBookSaga() {
   
    yield takeEvery(REDUCER_OPERATIONS.LOAD_ADD_BOOK_REQUEST, addBook);
     
 }
 function*  addCategory(action) {
  try {
      const users = yield call(axios.post,'http://localhost:8081/createCategory',action.payload);
      console.log(users);
      yield put({type: REDUCER_OPERATIONS.LOAD_ADD_CATEGORY_SUCCESS, data: users.data});
  } catch (e) {
      yield put({type: REDUCER_OPERATIONS.LOAD_USERS_ERROR, error: e.message});
  }
}
 export function* addCategorySaga() {
   
    yield takeEvery(REDUCER_OPERATIONS.LOAD_ADD_CATEGORY_REQUEST, addCategory);
     
 }
 function* fetchuserRegister() {
  try {
    const users = yield call(axios.get,'http://localhost:8081/userRequest');
      console.log(users);
      yield put({type: REDUCER_OPERATIONS.LOAD_USER_REGISTER_SUCCESS, data: users.data});
  } catch (e) {
      yield put({type: REDUCER_OPERATIONS.LOAD_USERS_ERROR, error: e.message});
  }
}
export function* userRegisterSaga() {
   
   yield takeEvery(REDUCER_OPERATIONS.LOAD_USER_REGISTER_REQUEST, fetchuserRegister);
    
}
export default function* rootSaga() {

  yield all([
    authenticateSaga(),
    userRegisterSaga(),
    allBooksDetailsSaga(),
    allUsersDetailsSaga(),
    addBookSaga(),
    addCategorySaga()
  ])
}