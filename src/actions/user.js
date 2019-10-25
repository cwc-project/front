import axios from 'axios';

export const REG_USER = 'REG_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const FETCH_USER = 'FETCH_USER';
export const ERR_USER = 'ERR_USER';

const server = process.env.SERVER_URL_LOCAL;

const fetchUser = () => ({ type: FETCH_USER });
const loginSuccess = data => ({ type: LOGIN_USER, user: data });
const loggedOut = () => ({ type: LOGOUT_USER });

export function login(input, history, handleError) {
  return dispatch => {
    dispatch(fetchUser());
    return axios
      .post(`${server}/user/login`, {
        ...input,
      })
      .then(({ data }) => dispatch(loginSuccess(data)))
      .then(() => history.replace('/projects'))
      .catch(e => {
        handleError(e);
        dispatch({
          type: ERR_USER,
        });
      });
  };
}

export function reg(input, history, handleError) {
  return dispatch => {
    dispatch(fetchUser());
    return axios
      .post(`${server}/user/register`, {
        ...input,
      })
      .then(({ data }) => dispatch(loginSuccess(data)))
      .then(() => history.replace('/projects'))
      .catch(err => {
        handleError(err);
        dispatch({
          type: ERR_USER,
        });
      });
  };
}
/* eslint-disable no-console */
/* eslint-disable arrow-body-style */

export function logout(token, history) {
  return dispatch => {
    return axios(`${server}/user/logout`, {
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
  };
}
