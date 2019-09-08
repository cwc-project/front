import axios from 'axios';

export const REG_USER = 'REG_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const FETCH_USER = 'FETCH_USER';
export const ERR_USER = 'ERR_USER';

const loginSuccess = data => ({ type: LOGIN_USER, user: data });

export const login = (input, history, handleError) => dispatch => {
  dispatch({
    type: FETCH_USER,
  });
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

export const logout = history => {
  history.push('/');
  return {
    type: LOGOUT_USER,
  };
};

export const reg = (input, history, handleError) => dispatch => {
  dispatch({
    type: FETCH_USER,
  });
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
