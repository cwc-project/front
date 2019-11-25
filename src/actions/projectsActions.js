import axios from 'axios';

import * as types from '../constants/actionTypes';
import server from '../constants/server';
import { fetchProjects, fetchProject } from './fetchActions';
import { errProjects, errProject } from './errorActions';

export const gotoProject = (history, id) => history.push(`/projects/${id}`);

const getProjectsSuccess = projects => ({
  type: types.GET_PROJECTS,
  ...projects,
});
const getProjectSuccess = project => ({ type: types.GET_PROJECT, ...project });
const addProjectSuccess = () => ({ type: types.ADD_PROJECT });

export const getProjects = token => dispatch => {
  dispatch(fetchProjects());
  return axios({
    url: `${server}/projects`,
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then(({ data }) => dispatch(getProjectsSuccess(data)))
    .catch(err => dispatch(errProjects(err)));
};

export const getProject = (id, token) => dispatch => {
  dispatch(fetchProject());
  return axios({
    url: `${server}/projects/${id}`,
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then(({ data }) => dispatch(getProjectSuccess(data)))
    .catch(err => dispatch(errProject(err)));
};

export const addProject = (title, token, history) => dispatch => {
  dispatch(fetchProject());
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
    .then(({ data }) => {
      dispatch(addProjectSuccess());
      gotoProject(history, data.insertedId);
    })
    .catch(err => dispatch(errProject(err)));
};
