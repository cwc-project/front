import axios from 'axios';

export const REG_USER = 'REG_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const FETCH_USER = 'FETCH_USER';
export const ERR_USER = 'ERR_USER';

const errVal = e => (e.response ? e.response.data.error : e.toString());

export const login = (profile, history, handleError) => dispatch => {
  dispatch({
    type: FETCH_USER,
  });
  return axios
    .post(`${process.env.SERVER_URL_LOCAL}/user/login`, {
      ...profile,
    })
    .then(({ data }) => {
      handleError('');
      return dispatch({
        type: LOGIN_USER,
        profile: data,
      });
    })
    .then(() => history.push('/projects'))
    .catch(e => {
      handleError(errVal(e));
      dispatch({
        type: ERR_USER,
      });
    });
};

export const reg = (name, email, password, handleError) => dispatch => {
  dispatch({
    type: FETCH_USER,
  });
  return axios
    .post(`${process.env.SERVER_URL_LOCAL}/user/register`, {
      name,
      email,
      password,
    })
    .then(({ data }) => {
      handleError('');
      return dispatch({
        type: REG_USER,
        profile: data,
      });
    })
    .catch(e => {
      handleError(errVal(e));
      dispatch({
        type: ERR_USER,
      });
    });
};
