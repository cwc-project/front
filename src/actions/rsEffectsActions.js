export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const TOGGLE_TAB = 'TOGGLE_TAB';

// в одно и то же время может быть открыто только
// одно модальное окно
export const toggleModal = () => ({ type: TOGGLE_MODAL });

export const toggleTab = (activeTab = '1') => ({
  type: TOGGLE_TAB,
  activeTab,
});
