import { all, call, put, takeEvery } from 'redux-saga/effects';
import * as types from '../actions/types';
import { getUsersData, getLables } from '../services/candidates.service';

function* candidatesRequest(request) {
  try {
    yield call(getUsersData, request.payload);
  } catch (err) {
    return new err(err);
  }
}

export function* candidatesSaga() {
  yield all([]);
}
