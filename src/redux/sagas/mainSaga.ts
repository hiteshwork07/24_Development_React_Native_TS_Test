import {all, takeEvery} from 'redux-saga/effects';
import userSaga from './userSaga';

function* helloSaga() {
  console.log('Hello from saga!');
}

export function* mainSaga() {
  yield all([
    takeEvery('TEST/ALO', helloSaga),
    userSaga,
  ]);
}
