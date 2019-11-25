import * as types from '../constants/actionTypes';

export const loginError = err => ({ type: types.ERR_LOGIN, err });
export const regError = err => ({ type: types.ERR_REG, err });
export const errProject = err => ({ type: types.ERR_PROJECT, err });
export const errProjects = err => ({ type: types.ERR_PROJECTS, err });
export const errTask = err => ({ type: types.ERR_TASK, err });
