import { TOGGLE_MODAL, TOGGLE_TAB } from '../actions';

const reducer = (state = { modal: false, activeTab: '1' }, action) => {
  switch (action.type) {
    case TOGGLE_MODAL:
      return { ...state, modal: !state.modal };

    case TOGGLE_TAB:
      return { ...state, activeTab: action.activeTab };

    default:
      return state;
  }
};

export default reducer;
