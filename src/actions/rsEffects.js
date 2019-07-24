export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const TOGGLE_TAB = 'TOGGLE_TAB';

export const toggleModal = () => ({ type: TOGGLE_MODAL });

export const toggleTab = (activeTab = '1') => ({
  type: TOGGLE_TAB,
  activeTab,
});
