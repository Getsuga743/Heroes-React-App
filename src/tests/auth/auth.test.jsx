import authReducer from '../../auth/authReducer';
import types from '../../types/types';

describe('pruebas sobre authReducer', () => {
  test('deberia de devolver el estado default', () => {
    const action = {};
    const state = authReducer({}, {});
    expect(state).toEqual(action);
  });
  test('deberia de devolver un logout', () => {
    const action = { type: types.logout };
    const state = authReducer({ logged: true }, action);
    expect(state.logged).toBe(false);
  });
  test('deberia de devolver un login', () => {
    const action = { type: types.login };
    const state = authReducer({ logged: false }, action);
    expect(state.logged).toBe(true);
  });
});
