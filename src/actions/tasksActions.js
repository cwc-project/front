import axios from 'axios';

import { server } from '../constants';
import { errTask } from './errorActions';

export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const EDIT_TASK = 'EDIT_TASK';

const addTaskSuccess = task => ({ type: ADD_TASK, ...task });
const deleteTaskSuccess = id => ({ type: DELETE_TASK, id });
const editTaskSuccess = task => ({ type: EDIT_TASK, ...task });

export const addTask = (title, projectId, token) => dispatch =>
  axios({
    url: `${server}/tasks`,
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: {
      title,
      projectId,
    },
  })
    .then(({ data }) => dispatch(addTaskSuccess(data)))
    .catch(err => dispatch(errTask(err)));

export const deleteTask = (id, projectId, token) => dispatch =>
  axios({
    url: `${server}/tasks`,
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: {
      id,
      projectId,
    },
  })
    .then(() => dispatch(deleteTaskSuccess(id)))
    .catch(err => dispatch(errTask(err)));

export const editTask = (taskKey, id, projectId, token) => dispatch =>
  axios({
    url: `${server}/tasks`,
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: {
      taskKey,
      id,
      projectId,
    },
  })
    .then(({ data }) => dispatch(editTaskSuccess(data)))
    .catch(err => dispatch(errTask(err)));
