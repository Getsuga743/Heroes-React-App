import React from 'react';
import AppRouter from '../../routers/AppRouter';
import { mount } from 'enzyme';
import AuthContext from '../../auth/AuthContext';

describe('Pruebas en <AppRouter />', () => {
  const contextValue = {
    dispatch: jest.fn(),
    user: {
      logged: false,
    },
  };
  test('debe de mostrar el login si no esta autenticado', () => {
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>,
    );
    expect(wrapper.find('h1').exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });
  test('debe de mostrar el componente marvel si está autenticado', () => {
    const contextValueTrue = {
      dispatch: jest.fn(),
      user: {
        name: 'Ivan',
        logged: true,
      },
    };
    const wrapper = mount(
      <AuthContext.Provider value={contextValueTrue}>
        <AppRouter />
      </AuthContext.Provider>,
    );
    expect(wrapper).toMatchSnapshot();

    expect(wrapper.find('nav').exists()).toBe(true);
  });
});
  