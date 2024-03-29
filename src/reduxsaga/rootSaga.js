import { put, call, takeEvery, all } from 'redux-saga/effects';
import { REDUCER_OPERATIONS } from './StringConstants';
import axios from '../components/Axios';
import { loadAllBooksRequest, loadAllUsersDetailsRequest, loadgetAllBookIssuesRequest, loadgetApprovedBooksRequest, loadgetCategoryRequest, loadgetOverDueRequest } from './actions';



const port = 'http://localhost:8081';

function* GetApiFunc(action) {
  console.log(action)
  var success = action.success;
  // yield put({ type: success , data: action.dummydata });
  try {
    var users = yield call(axios.get, `${port}/${action.link}`);
    console.log(users)
    var success = action.success;
    yield put({ type: success, data: users.data });
  } catch (e) {

    yield put({ type: REDUCER_OPERATIONS.LOAD_USERS_ERROR, error: e.message });
  }
}
function* PostApiFunc(action) {
  console.log(action)
  try {
    var users = yield call(axios.post, `${port}/${action.link}`, action.payload);
    console.log(users)
    if (action.type === 'LOAD_ADD_CATEGORY_REQUEST')
      yield put(loadgetCategoryRequest())
    if (action.type === 'LOAD_ADD_BOOK_REQUEST')
      yield put(loadAllBooksRequest())
    var success = action.success;
    yield put({ type: success, data: users.data });
  } catch (e) {
    console.log(e.message)
    yield put({ type: success, data: users.data });
  }
}
function* PostParamsApiFunc(action) {
  console.log(action)
  try {
    var users = yield call(axios.post, `${port}/${action.link}`);
    console.log(users)
    if(action.type==='LOAD_ADD_RESPONSE_REQUEST')
      yield put(loadgetAllBookIssuesRequest())
    if(action.type==='LOAD_RETURN_BOOK_REQUEST')
      yield put(loadgetApprovedBooksRequest())
    if(action.type==='LOAD_APPROVE_USER_REQUEST')
      yield put(loadAllUsersDetailsRequest())
    var success = action.success;
    yield put({ type: success, data: users.data });
  } catch (e) {

    yield put({ type: REDUCER_OPERATIONS.LOAD_USERS_ERROR, error: e.message });
  }
}
function* DeleteApiFunc(action) {
  console.log(action)
  try {
    var users = yield call(axios.delete, `${port}/${action.link}`);
    console.log(users)
    if (action.type === 'LOAD_DELETE_CATEGORY_REQUEST')
      yield put(loadgetCategoryRequest())
    if (action.type === 'LOAD_DELETE_BOOK_REQUEST')
      yield put(loadAllBooksRequest())
    if(action.type==='LOAD_RETURN_BOOK_REQUEST')
      yield put(loadgetOverDueRequest())
    var success = action.success;
    yield put({ type: success, data: users.data });
  } catch (e) {

    yield put({ type: REDUCER_OPERATIONS.LOAD_USERS_ERROR, error: e.message });
  }
}


export function* Saga() {

  yield all([
    yield takeEvery(REDUCER_OPERATIONS.LOAD_USER_REGISTER_REQUEST, PostApiFunc),
    yield takeEvery(REDUCER_OPERATIONS.LOAD_ADMIN_REGISTER_REQUEST, PostApiFunc),
    yield takeEvery(REDUCER_OPERATIONS.LOAD_AUTHENTICATE_TOKEN_REQUEST, PostApiFunc),
    yield takeEvery(REDUCER_OPERATIONS.LOAD_APPROVE_USER_REQUEST, PostParamsApiFunc),
    yield takeEvery(REDUCER_OPERATIONS.LOAD_USER_BY_NAME_REQUEST, GetApiFunc),
    yield takeEvery(REDUCER_OPERATIONS.LOAD_ALL_USERS_DETAILS_REQUEST, GetApiFunc),
    yield takeEvery(REDUCER_OPERATIONS.LOAD_ALL_BOOKS_DETAILS_REQUEST, GetApiFunc),
    yield takeEvery(REDUCER_OPERATIONS.LOAD_ADD_BOOK_REQUEST, PostApiFunc),
    yield takeEvery(REDUCER_OPERATIONS.LOAD_ADD_CATEGORY_REQUEST, PostApiFunc),

    yield takeEvery(REDUCER_OPERATIONS.LOAD_ISSUE_BOOK_REQUEST, PostParamsApiFunc),
    yield takeEvery(REDUCER_OPERATIONS.LOAD_GET_ALLBOOK_ISSUES_REQUEST, GetApiFunc),
    yield takeEvery(REDUCER_OPERATIONS.LOAD_ADD_RESPONSE_REQUEST, PostParamsApiFunc),
    yield takeEvery(REDUCER_OPERATIONS.LOAD_GET_APPROVEDBOOKS_REQUEST, GetApiFunc),
    yield takeEvery(REDUCER_OPERATIONS.LOAD_RETURN_BOOK_REQUEST, PostParamsApiFunc),
    yield takeEvery(REDUCER_OPERATIONS.LOAD_GET_OVERDUE_REQUEST, GetApiFunc),
    yield takeEvery(REDUCER_OPERATIONS.LOAD_CATEGORY_REQUEST, GetApiFunc),
    yield takeEvery(REDUCER_OPERATIONS.LOAD_DELETE_CATEGORY_REQUEST, DeleteApiFunc),
    yield takeEvery(REDUCER_OPERATIONS.LOAD_DELETE_BOOK_REQUEST, DeleteApiFunc),
    yield takeEvery(REDUCER_OPERATIONS.LOAD_CATEGORYAGE_REQUEST, GetApiFunc),
    yield takeEvery(REDUCER_OPERATIONS.LOAD_CUSTOMER_SEARCHFILTER_REQUEST, GetApiFunc),
    yield takeEvery(REDUCER_OPERATIONS.LOAD_ADMIN_SEARCHFILTER_REQUEST, GetApiFunc),

  ])
}

export default function* rootSaga() {
  yield Saga()

}
