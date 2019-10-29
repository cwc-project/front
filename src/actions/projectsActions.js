import axios from 'axios';
import { TOGGLE_MODAL } from './rsEffectsActions';
import { server } from '../constants';

export const GET_PROJECTS = 'GET_PROJECTS';
export const FETCH_PROJECTS = 'FETCH_PROJECTS';
export const ERR_PROJECTS = 'ERR_PROJECTS';
export const ADD_PROJECT = 'ADD_PROJECT';

const fetchProjects = () => ({ type: FETCH_PROJECTS });
const projectsError = err => ({ type: ERR_PROJECTS, err });
const getProjectsSuccess = projects => ({ type: GET_PROJECTS, projects });
const addProjectSuccess = project => ({ type: ADD_PROJECT, project });

// будет осуществляться переход на соответствующую страницу проекта
// только id страницы будет не projectId, a например projects.lenth + 1

export const getProjects = token => dispatch => {
  dispatch(fetchProjects());
  return axios({
    url: `${server}/projects`,
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then(({ data }) => dispatch(getProjectsSuccess(data.projects)))
    .catch(err => dispatch(projectsError(err)));
};
// Добавить history
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
    .then(({ data }) => dispatch(addProjectSuccess({ title, _id: data.id })))
    .then(() => dispatch({ type: TOGGLE_MODAL }))
    .catch(err => dispatch(projectsError(err)));
};
