import rsEffects, { initialState } from '../../src/reducers/rsEffects';
import { toggleModal, toggleTab, LOGIN_USER } from '../../src/actions';

describe('rsEffects REDUCER', () => {
  it('TOGGLE_MODAL', () => {
    expect(rsEffects(initialState, toggleModal())).toEqual({
      modal: true,
      activeTab: '1',
    });

    expect(
      rsEffects(
        {
          ...initialState,
          modal: true,
        },
        toggleModal(),
      ),
    ).toEqual({
      modal: false,
      activeTab: '1',
    });
  });

  it('TOGGLE_TAB', () => {
    expect(rsEffects(initialState, toggleTab('2'))).toEqual({
      modal: false,
      activeTab: '2',
    });

    expect(rsEffects(initialState, toggleTab())).toEqual(initialState);
  });

  it('LOGIN_USER', () => {
    expect(
      rsEffects(
        { ...initialState, modal: true },
        {
          type: LOGIN_USER,
        },
      ),
    ).toEqual({
      modal: false,
      activeTab: '1',
    });
  });
});
