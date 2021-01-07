import { mount } from 'enzyme';
import { MemoryRouter, Route } from 'react-router-dom';
import HeroeScreen from '../../../components/Heroes/HeroScreen';

describe('Pruebas en <HeroScreen />', () => {
  const historyMock = {
    length: 10,
    push: jest.fn(),
    goBack: jest.fn(),
  };

  const wrapper = mount(
    <MemoryRouter initialEntries={['/heroe']}>
      <HeroeScreen history={historyMock} />
    </MemoryRouter>,
  );

  test('debe de mostrarse el componente redirect si no hay argumentos en la url', () => {
    expect(wrapper.find('Redirect').exists()).toBe(true);
  });
  test('debe de mostrar un hero si el parametro existe y se encuentra', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/heroe/marvel-spider']}>
        <Route path="/heroe/:heroeId" component={HeroeScreen} />
      </MemoryRouter>,
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.row').exists()).toBe(true);
  });
  test('debe de regresar a la pantalla anterior con PUSH', () => {
    const history = {
      length: 1,
      push: jest.fn(),
      goBack: jest.fn(),
    };
    const wrapper = mount(
      <MemoryRouter initialEntries={['/heroe/marvel-spider']}>
        <Route
          path="/heroe/:heroeId"
          component={() => <HeroeScreen history={history} />}
        />
      </MemoryRouter>,
    );
    wrapper.find('button').prop('onClick')();
    expect(history.push).toHaveBeenCalledWith('/');
    expect(history.goBack).not.toHaveBeenCalledWith('/');
  });
  test('debe de regresar a la pantalla anterior GoBack', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/heroe/marvel-spider']}>
        <Route
          path="/heroe/:heroeId"
          component={() => <HeroeScreen history={historyMock} />}
        />
      </MemoryRouter>,
    );
    wrapper.find('button').prop('onClick')();
    expect(historyMock.push).not.toHaveBeenCalledWith('/');
    expect(historyMock.goBack).toHaveBeenCalled();
  });
  test('debe de llamar al redirect si el heroe no existe', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/heroe/marvsadsa']}>
        <Route
          path="/heroe/:heroeId"
          component={() => <HeroeScreen history={historyMock} />}
        />
      </MemoryRouter>,
    );
    expect(wrapper.text()).toBe('');
  });
});
