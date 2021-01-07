import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import AuthContext from '../../auth/AuthContext';
import DashboardRoutes from '../../routers/DashboardRoutes';

describe('Pruebas en <DashboardRoutes />', () => {
  const contextValue = {
    dispatch: jest.fn(),
    user: {
      logged: true,
      name: 'Juanito',
    },
  };
  test('debe de mostarse correctamente', () => {
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <DashboardRoutes />
        </MemoryRouter>
      </AuthContext.Provider>,
    );
    expect(wrapper.find('span').text().trim()).toBe('Hello Juanito');
    expect(wrapper).toMatchSnapshot();
  });
});
