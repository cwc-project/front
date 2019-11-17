import {
  TOGGLE_MODAL_REG,
  TOGGLE_MODAL_PROJ_ADD,
  TOGGLE_MODAL_TIMER,
  TOGGLE_TAB,
  LOGIN_USER,
  ADD_PROJECT,
} from '../actions';

export const initialState = {
  modalReg: false,
  modalProjAdd: false,
  modalTimer: false,
  activeTab: '1',
};

const rsEffectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MODAL_REG:
      return { ...state, modalReg: !state.modalReg };

    case TOGGLE_MODAL_PROJ_ADD:
      return { ...initialState, modalProjAdd: !state.modalProjAdd };

    case TOGGLE_MODAL_TIMER:
      return { ...initialState, modalProjAdd: !state.modalTimer };

    case TOGGLE_TAB:
      return { ...state, activeTab: action.activeTab };

    case LOGIN_USER:
    case ADD_PROJECT:
      return initialState;

    default:
      return state;
  }
};

export default rsEffectsReducer;
// case ADD_PROJECT:
//   return initialState;
