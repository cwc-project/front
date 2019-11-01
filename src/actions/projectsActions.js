import axios from 'axios';

import { server } from '../constants';
import { fetchProjects, fetchProject } from './fetchActions';
import { errProjects, errProject } from './errorActions';

export const GET_PROJECTS = 'GET_PROJECTS';
export const ADD_PROJECT = 'ADD_PROJECT';

export const gotProject = (history, id) => history.push(`/projects/${id}`);

const getProjectsSuccess = projects => ({ type: GET_PROJECTS, ...projects });
const addProjectSuccess = project => ({ type: ADD_PROJECT, ...project });

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
    .then(({ data }) => dispatch(addProjectSuccess(data)))
    .then(({ project }) => gotProject(history, project.id))
    .catch(err => dispatch(errProject(err)));
};
