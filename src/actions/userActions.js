import axios from 'axios';
import { server } from '../constants';

export const REG_USER = 'REG_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const FETCH_USER = 'FETCH_USER';
export const ERR_LOGIN = 'ERR_LOGIN';
export const ERR_REG = 'ERR_REG';

const fetchUser = () => ({ type: FETCH_USER });
const loginSuccess = data => ({ type: LOGIN_USER, user: data });
const loginError = err => ({ type: ERR_LOGIN, err });
const regError = err => ({ type: ERR_REG, err });
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
