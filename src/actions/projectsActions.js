import axios from 'axios';
// import { TOGGLE_MODAL } from './rsEffectsActions';
import { server } from '../constants';
import { fetchProjects, fetchProject } from './fetchActions';

export const GET_PROJECTS = 'GET_PROJECTS';
// export const FETCH_PROJECTS = 'FETCH_PROJECTS';
export const ERR_PROJECTS = 'ERR_PROJECTS';
export const ERR_PROJECT = 'ERR_PROJECT';
export const ADD_PROJECT = 'ADD_PROJECT';

export const gotProject = (history, id) => history.push(`/projects/${id}`);

export const errProject = err => ({ type: ERR_PROJECT, err });

const errProjects = err => ({ type: ERR_PROJECTS, err });
// const fetchProjects = () => ({ type: FETCH_PROJECTS });
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
    .then(({ data }) => dispatch(addProjectSuccess({ title, id: data.id })))
    .then(({ project }) => gotProject(history, project.id))
    .catch(err => dispatch(errProject(err)));
};
