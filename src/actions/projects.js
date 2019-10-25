import axios from 'axios';

export const GET_PROJECTS = 'GET_PROJECTS';
export const FETCH_PROJECTS = 'FETCH_PROJECTS';
export const ERR_PROJECTS = 'ERR_PROJECTS';
export const ADD_PROJECT = 'ADD_PROJECT';

const server = process.env.SERVER_URL_LOCAL;

const add = project => ({ type: ADD_PROJECT, project });
// будет осуществляться переход на соответствующую страницу проекта
// только id страницы будет не projectId, a например projects.lenth + 1

/* eslint-disable no-console */
/* eslint-disable arrow-body-style */

export const addProject = (title, token) => dispatch => {
  return axios({
    url: `${server}/projects`,
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: {
      title,
    },
  })
    .then(({ data }) => dispatch(add(data)))
    .catch(e => e);
};

// export addProject
// export function addProject(title, token, history) {
//   return dispatch => {
//     return axios
//       .post(`${server}/projects/`, {
//         method: 'POST',
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//         data: {
//           title,
//         },
//       })
//       .then(({ data }) => dispatch(add(data)))
//       .then(() => history.replace('/projects'))
//       .catch(error => dispatch({
//           type: ERR_PROJECTS,
//           error
//         });
//       });
//   };
// }
