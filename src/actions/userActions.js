import axios from 'axios';
import { server } from '../constants';
import { fetchUser } from './fetchActions';
import { loginError, regError } from './errorActions';

export const REG_USER = 'REG_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

const loginSuccess = data => ({ type: LOGIN_USER, user: data });
const loggedOut = () => ({ type: LOGOUT_USER });

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

/* eslint-disable no-console */
export const logout = (token, history) => dispatch =>
  axios(`${server}/user/logout`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then(() => dispatch(loggedOut()))
    .catch(e => {
      console.error(`Unable to logout: ${e}`);
      return dispatch(loggedOut());
    })
    .finally(() => history.replace('/'));
