import axios from 'axios';

import { server } from '../constants';
// import { fetchProjects, fetchProject } from './fetchActions';
// import { errProjects, errProject } from './errorActions';

export const ADD_TODO = 'ADD_TODO';

// const addTodoSuccess = () => ({ type: ADD_TODO });

export const addTodo = (title, todoId, token) => () =>
  // dispatch(fetchProject());
  axios({
    url: `${server}/todos`,
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: {
      todoId,
      title,
    },
  })
    .then(({ data }) => console.log(data))
    .catch(err => console.log(err));
