import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter, Router } from 'react-router-dom';
import AuthContext from '../../../auth/AuthContext';
import Navbar from '../../../components/Ui/Navbar';
import types from '../../../types/types';
import '@testing-library/jest-dom';
describe('Pruebas en <Navbar />', () => {
  const contextValue = {
    dispatch: jest.fn(),
    user: {
      logged: true,
      name: 'Fernandito',
    },
  };
  //genera el history
  const historyMock = {
    push: jest.fn(),
    listen: jest.fn(),
    replace: jest.fn(),
    location: {},
    createHref: jest.fn(),
  };
  const wrapper = mount(
    <AuthContext.Provider value={contextValue}>
      <MemoryRouter>
        <Router history={historyMock}>
          <Navbar />
        </Router>
      </MemoryRouter>
    </AuthContext.Provider>,
  );
  afterEach(() => {
    jest.clearAllMocks();
  });
  test('debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.text-info').text().trim()).toBe('Hello Fernandito');
  });
  test('debe de funcionar el boton: llamar logout y history', () => {
    wrapper.find('button').simulate('click');
    expect(contextValue.dispatch).toHaveBeenCalledWith({ type: types.logout });
    expect(historyMock.replace).toHaveBeenCalledWith('/login')
  });
});
