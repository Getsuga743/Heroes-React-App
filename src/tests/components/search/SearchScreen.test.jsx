import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter, Route } from 'react-router-dom';
import SearchScreen from '../../../components/search/SearchScreen';

describe('Pruebas en  <SearchScreen />', () => {
  test('debe de mostrarse correctamente con valores por defecto', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search']}>
        <Route path="/search" component={SearchScreen}></Route>
      </MemoryRouter>,
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.alert-info').text().trim()).toBe('Search a hero');
  });
  test('debe de mostrar a Batman y el input con el valor del queryString', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search?q=batman']}>
        <Route path="/search" component={SearchScreen}></Route>
      </MemoryRouter>,
    );
    expect(wrapper.find('input').prop('value')).toBe('batman');
    expect(wrapper).toMatchSnapshot();
  });
  test('debe de mostrar un error si no se encuentra el heroe', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search?q=batmasdsad']}>
        <Route path="/search" component={SearchScreen}></Route>
      </MemoryRouter>,
    );
    expect(wrapper.find('.alert').exists()).toBe(true);
    expect(wrapper.find('.alert').text()).toBe('Hero not found...');
    expect(wrapper).toMatchSnapshot();
  });
  test('debe de llamar al push history', () => {
    const history = {
      push: jest.fn(),
    };
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search?q=batman']}>
        <Route
          path="/search"
          component={() => <SearchScreen history={history} />}
        ></Route>
      </MemoryRouter>,
    );
    wrapper.find('input').simulate('change', {
      target: {
        name: 'searchText',
        value: 'batman',
      },
    });
    wrapper.find('form').simulate('submit', {
      preventDefault() {},
    });
    expect(history.push).toHaveBeenCalledWith('?q=batman');
  });
});
