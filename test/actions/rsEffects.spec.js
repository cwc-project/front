import {
  toggleModal,
  toggleTab,
  TOGGLE_MODAL,
  TOGGLE_TAB,
} from '../../src/actions';

describe('rsEffects ACTIONS', () => {
  it('toggleModal should return TOGGLE_MODAL action', () => {
    expect(toggleModal()).toEqual({
      type: TOGGLE_MODAL,
    });
  });

  it('toggleTab should return TOGGLE_TAB action with payload', () => {
    expect(toggleTab()).toEqual({
      type: TOGGLE_TAB,
      activeTab: '1',
    });

    expect(toggleTab('2')).toEqual({
      type: TOGGLE_TAB,
      activeTab: '2',
    });
  });
});
