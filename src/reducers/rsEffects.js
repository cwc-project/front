import { TOGGLE_MODAL, TOGGLE_TAB, LOGIN_USER } from '../actions';

const reducer = (state = { modal: false, activeTab: '1' }, action) => {
  switch (action.type) {
    case TOGGLE_MODAL:
      return { ...state, modal: !state.modal };

    case LOGIN_USER:
      return { ...state, modal: false };

    case TOGGLE_TAB:
      return { ...state, activeTab: action.activeTab };

    default:
      return state;
  }
};

export default reducer;
