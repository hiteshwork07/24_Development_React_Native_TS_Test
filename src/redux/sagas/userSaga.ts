import {all, call, put, takeLatest} from 'redux-saga/effects';
import {request} from '../../utils/http';
import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
} from '../reducers/userReducer';
import {getSimplifiedError} from '../../utils/error';
import {IS_PROCESSING_REQUEST} from '../reducers/systemReducer';

function showProcessing(isProcessing = false) {
  return {
    type: IS_PROCESSING_REQUEST,
    isProcessing,
  };
}

function onGetUserApi() {
  return request.get('/user/getProfile');
}

function* handleGetUser() {
  try {
    yield put(showProcessing(true));
    const {status, data} = yield call(onGetUserApi);
    if (status === 200) {
      yield put({
        type: GET_USER_SUCCESS,
        data,
      });
    } else {
      yield put({
        type: GET_USER_ERROR,
        error: 'Something went wrong, Please try again later',
      });
    }
  } catch (error) {
    console.log('error', error);
    yield put({
      type: GET_USER_ERROR,
      error:
        getSimplifiedError(error) ||
        'Something went wrong, Please try again later',
    });
  } finally {
    yield put(showProcessing());
  }
}

export default all([
  takeLatest(GET_USER_REQUEST, handleGetUser),
]);
