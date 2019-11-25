import axios from 'axios';

import * as types from '../constants/actionTypes';
import server from '../constants/server';
import { fetchUser } from './fetchActions';
import { loginError, regError } from './errorActions';

const loginSuccess = data => ({ type: types.LOGIN_USER, user: data });
const loggedOut = () => ({ type: types.LOGOUT_USER });

export const login = (input, history) => dispatch => {
  dispatch(fetchUser());
  return axios
    .post(`${server}/user/login`, {
      ...input,
    })
    .then(({ data }) => dispatch(loginSuccess(data)))
    .then(() => history.replace('/projects'))
    .catch(err => dispatch(loginError(err)));
};

export const reg = (input, history) => dispatch => {
  dispatch(fetchUser());
  return axios
    .post(`${server}/user/register`, {
      ...input,
    })
    .then(({ data }) => dispatch(loginSuccess(data)))
    .then(() => history.replace('/projects'))
    .catch(err => dispatch(regError(err)));
};

export const logout = history => dispatch => {
  dispatch(loggedOut());
  history.replace('/');
};
