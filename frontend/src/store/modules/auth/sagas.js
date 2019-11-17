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

  yield put(loginSuccess(token, user));

  history.push('/');
}

export default all([takeLatest('@auth/LOGIN_REQUEST', login)]);
