import axios from 'axios';

export const REG_USER = 'REG_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const FETCH_USER = 'FETCH_USER';
export const ERR_USER = 'ERR_USER';

const fetchUser = () => ({ type: FETCH_USER });
const loginSuccess = data => ({ type: LOGIN_USER, user: data });
const loggedOut = () => ({ type: LOGOUT_USER });

export function login(input, history, handleError) {
  return dispatch => {
    dispatch(fetchUser());
    return axios
      .post(`${process.env.SERVER_URL_LOCAL}/user/login`, {
        ...input,
      })
      .then(({ data }) => dispatch(loginSuccess(data)))
      .then(() => history.push('/projects'))
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
      .post(`${process.env.SERVER_URL_LOCAL}/user/register`, {
        ...input,
      })
      .then(({ data }) => dispatch(loginSuccess(data)))
      .then(() => history.push('/projects'))
      .catch(err => {
        handleError(err);
        dispatch({
          type: ERR_USER,
        });
      });
  };
}

export function logout(token, history) {
  return axios
    .post(`${process.env.SERVER_URL_LOCAL}/user/logout`, {
      token,
      headers: { Authorization: `Bearer ${token}` },
    })
    .then(() => loggedOut())
    .catch(e => {
      console.error(`Failed to logout: ${e}`);
      return loggedOut();
    })
    .finally(() => history.push('/'));
}
