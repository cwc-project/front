import axios from 'axios';

export const LOGIN_USER = 'LOGIN_USER';
export const REG_USER = 'REG_USER';
// export const ERR_USER = 'ERR_USER';

export const logUser = (email, password, handleError) => dispatch => {
  axios
    .post(`${process.env.SERVER_URL}/user/login`, {
      email,
      password,
    })
    .then(({ data }) => {
      handleError('');
      return dispatch({
        type: LOGIN_USER,
        details: data,
      });
    })
    .catch(({ response: { data } }) => {
      handleError(data.error);
      // dispatch({
      //   type: ERR_USER,
      //   err: data.error,
      // });
    });
};
