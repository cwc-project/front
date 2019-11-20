export const TOGGLE_MODAL_REG = 'TOGGLE_MODAL_REG';
export const TOGGLE_MODAL_PROJ_ADD = 'TOGGLE_MODAL_PROJ_ADD';
// export const TOGGLE_MODAL_TIMER = 'TOGGLE_MODAL_TIMER';

export const TOGGLE_TAB = 'TOGGLE_TAB';

// в одно и то же время может быть открыто только
// одно модальное окно
export const toggleModalReg = () => ({ type: TOGGLE_MODAL_REG });
export const toggleModalProjAdd = () => ({ type: TOGGLE_MODAL_PROJ_ADD });
// export const toggleModalTimer = () => ({ type: TOGGLE_MODAL_TIMER });

export const toggleTab = (activeTab = '1') => ({
  type: TOGGLE_TAB,
  activeTab,
});
