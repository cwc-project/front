import reducer from '../../src/reducers';

// когда вместо state передается undefined + неправильный action
describe('root reducer', () => {
  it('should handle initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      rsEffects: { modal: false, activeTab: '1' },
      user: {
        authToken: '',
        info: {},
        loggedIn: false,
        loading: false,
      },
      projects: {
        projects: [],
        loading: true,
      },
    });
  });
});
