import axios from 'axios'
export const LOGIN_USER = 'LOGIN_USER'
export const REG_USER = 'REG_USER'

export const logUser = (email, pass) => {
    return axios.get('http://localhost:9000/api/user/login', {
        // params: {
        //   ID: 12345
        // }
      })
      .then(response => response.data)
      .then(user => ({
        type: LOGIN_USER,
        user
      }))
      .catch(error => console.log('ERRROR', error))
      // .then(function () {
      //   // always executed
      // });


}
