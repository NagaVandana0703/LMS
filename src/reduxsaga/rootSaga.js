import { put, call, takeEvery, all } from 'redux-saga/effects';
import { REDUCER_OPERATIONS } from './StringConstants';
import axios from '../components/Axios';
import { allusers } from './jsondata';

// export function* authenticateSaga() {

//   yield takeEvery(REDUCER_OPERATIONS.LOAD_AUTHENTICATE_TOKEN_REQUEST, asyncFunc);

// }
// export function* userRegisterSaga() {

//   yield takeEvery(REDUCER_OPERATIONS.LOAD_USER_REGISTER_REQUEST, asyncFunc);

// }
// export function* allUsersDetailsSaga() {

//   yield takeEvery(REDUCER_OPERATIONS.LOAD_ALL_USERS_DETAILS_REQUEST, asyncFunc);

// }

// export function* allBooksDetailsSaga() {

//    yield takeEvery(REDUCER_OPERATIONS.LOAD_ALL_BOOKS_DETAILS_REQUEST, asyncFunc);

// }
//  export function* addBookSaga() {

//     yield takeEvery(REDUCER_OPERATIONS.LOAD_ADD_BOOK_REQUEST, asyncFunc);

//  }

//  export function* addCategorySaga() {

//     yield takeEvery(REDUCER_OPERATIONS.LOAD_ADD_CATEGORY_REQUEST, asyncFunc);

//  }


function* asyncFunc(action) {
  
  
  console.log(action)
  var success = action.success;
  yield put({ type: success , data: action.dummydata });
  console.log(action.dummydata)
  try {
    if (action.payload)
      var users = yield call(axios.post, `http://localhost:8081/${action.link}`, action.payload);
    else{
 
      var users = yield call(axios.get, `http://localhost:8081/${action.link}`);
    }
    
    var success = action.success;
    yield put({ type: success , data: users.data });
  } catch (e) {
   
    yield put({ type: REDUCER_OPERATIONS.LOAD_USERS_ERROR, error: e.message });
  }
}


export  function* Saga() {

  yield all([
    yield takeEvery(REDUCER_OPERATIONS.LOAD_AUTHENTICATE_TOKEN_REQUEST, asyncFunc),
    yield takeEvery(REDUCER_OPERATIONS.LOAD_USER_REGISTER_REQUEST, asyncFunc),
    yield takeEvery(REDUCER_OPERATIONS.LOAD_ALL_USERS_DETAILS_REQUEST, asyncFunc),
    yield takeEvery(REDUCER_OPERATIONS.LOAD_ALL_BOOKS_DETAILS_REQUEST, asyncFunc),
    yield takeEvery(REDUCER_OPERATIONS.LOAD_ADD_BOOK_REQUEST, asyncFunc),
    yield takeEvery(REDUCER_OPERATIONS.LOAD_ADD_CATEGORY_REQUEST, asyncFunc)

  ])
}

export default function* rootSaga() {
  yield Saga()
  
}

// export default function* rootSaga() {

//   yield all([
//     authenticateSaga(),
//     userRegisterSaga(),
//     allBooksDetailsSaga(),
//     allUsersDetailsSaga(),
//     addBookSaga(),
//     addCategorySaga()
//   ])
// }