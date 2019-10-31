export const FETCH_USER = 'FETCH_USER';
export const FETCH_PROJECTS = 'FETCH_PROJECTS';
export const FETCH_PROJECT = 'FETCH_PROJECT';

export const fetchUser = () => ({ type: FETCH_USER });
export const fetchProjects = () => ({ type: FETCH_PROJECTS });
export const fetchProject = () => ({ type: FETCH_PROJECT });
