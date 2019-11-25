import * as types from '../constants/actionTypes';

// в одно и то же время может быть открыто только
// одно модальное окно
export const toggleModalReg = () => ({ type: types.TOGGLE_MODAL_REG });
export const toggleModalProjAdd = () => ({ type: types.TOGGLE_MODAL_PROJ_ADD });

export const toggleTab = (activeTab = '1') => ({
  type: types.TOGGLE_TAB,
  activeTab,
});
