import axios from 'axios';

import { server } from '../constants';
import { errTask } from './errorActions';

export const ADD_TASK = 'ADD_TASK';

const addTaskSuccess = task => ({ type: ADD_TASK, ...task });

export const addTask = (title, taskId, token) => dispatch =>
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
    .then(({ data }) => dispatch(addTaskSuccess(data)))
    .catch(err => dispatch(errTask(err)));
