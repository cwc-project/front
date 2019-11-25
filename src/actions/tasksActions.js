import axios from 'axios';

import * as types from '../constants/actionTypes';
import server from '../constants/server';
import { errTask } from './errorActions';

const addTaskSuccess = task => ({ type: types.ADD_TASK, ...task });
const deleteTaskSuccess = id => ({ type: types.DELETE_TASK, id });
const editTaskSuccess = task => ({ type: types.EDIT_TASK, ...task });

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
