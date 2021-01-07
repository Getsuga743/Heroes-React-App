import React from 'react';
import { mount } from 'enzyme';
import PrivateRoutes from '../../routers/PrivateRoutes';
import { MemoryRouter } from 'react-router-dom';

// memoryRouter: HoC hecho para hacer pruebas en unas rutas, emula un router
describe('Pruebas en <PrivateRoutes />', () => {
  const props = {
    location: {
      pathname: '/marvel',
    },
  };
  Storage.prototype.setItem = jest.fn();

  test('debe de mostrar el componente si está autenticado y guardar al localStorage', () => {
    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoutes
          isAuthenticated={true}
          component={() => <span>listo</span>}
          {...props}
        />
      </MemoryRouter>,
    );
    expect(wrapper.find('span').exists()).toBe(true);
    expect(wrapper.html()).toEqual('<span>listo</span>');
    expect(localStorage.setItem).toHaveBeenCalledWith('lastpath', '/marvel');
  });
  test('debe de bloquear el componente si no esta autenticado', () => {
    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoutes
          isAuthenticated={false}
          component={() => <span>listo</span>}
          {...props}
        />
      </MemoryRouter>,
    );
    expect(wrapper.find('span').exists()).toBe(false);
    expect(wrapper).toEqual({});
  });
});
