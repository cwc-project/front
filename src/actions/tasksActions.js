import axios from 'axios';

import { server } from '../constants';
// import { fetchProjects, fetchProject } from './fetchActions';
// import { errProjects, errProject } from './errorActions';

export const ADD_TASK = 'ADD_TASK';

// const addTodoSuccess = () => ({ type: ADD_TODO });

export const addTask = (title, taskId, token) => () =>
  // dispatch(fetchProject());
  axios({
    url: `${server}/tasks`,
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: {
      taskId,
      title,
    },
  })
    .then(({ data }) => console.log(data))
    .catch(err => console.log(err));
