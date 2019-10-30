import { TOGGLE_MODAL, TOGGLE_TAB, LOGIN_USER } from '../actions';

export const initialState = {
  modal: false,
  activeTab: '1',
};

const rsEffectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MODAL:
      return { ...state, modal: !state.modal };

    case TOGGLE_TAB:
      return { ...state, activeTab: action.activeTab };

    case LOGIN_USER:
      return { ...state, modal: false };

    default:
      return state;
  }
};

export default rsEffectsReducer;
