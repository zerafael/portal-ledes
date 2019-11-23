import { takeLatest, call, put, all } from 'redux-saga/effects';

import history from '../../../services/history';
import api from '../../../services/api';

import { loginSuccess } from './actions';

export function* login({ payload }) {
  const { email, password } = payload;

  const response = yield call(api.post, 'login', {
    email,
    password,
  });

  const { token, user } = response.data;

  api.defaults.headers.Authorization = `Bearer ${token}`;

  yield put(loginSuccess(token, user));

  history.push('/');
}

export function setToken({ payload }) {
  if (!payload) {
    return;
  }

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/LOGIN_REQUEST', login),
]);
