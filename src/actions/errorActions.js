export const ERR_LOGIN = 'ERR_LOGIN';
export const ERR_REG = 'ERR_REG';
export const ERR_PROJECTS = 'ERR_PROJECTS';
export const ERR_PROJECT = 'ERR_PROJECT';
export const ERR_TASK = 'ERR_TASK';

export const NAME_FORMAT_ERR = 'Use at least 1 character for name.';
export const EMAIL_FORMAT_ERR = 'Incorrect email format. Example: example@email.com'; // prettier-ignore
export const PASS_FORMAT_ERR = 'Password length should be not less than 6 characters. Please use at least one letter and one number.'; // prettier-ignore

export const loginError = err => ({ type: ERR_LOGIN, err });
export const regError = err => ({ type: ERR_REG, err });
export const errProject = err => ({ type: ERR_PROJECT, err });
export const errProjects = err => ({ type: ERR_PROJECTS, err });
export const errTask = err => ({ type: ERR_TASK, err });
