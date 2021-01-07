import React from 'react';
import { mount } from 'enzyme';
import AuthContext from '../../../auth/AuthContext';
import LoginScreen from '../../../components/Login/LoginScreen';
describe('Prueba en <LoginScreen />', () => {
  const history = {
    replace: jest.fn(),
  };
  const contextValue = {
    dispatch: jest.fn(),
    user: {
      logged: false,
    },
  };
  const wrapper = mount(
    <AuthContext.Provider value={contextValue}>
      <LoginScreen history={history} />
    </AuthContext.Provider>,
  );
  test('debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('debe de realizar el dispatch y la navegacion', () => {
    wrapper.find('button').prop('onClick')();
    expect(contextValue.dispatch).toHaveBeenCalledWith({
      payload: {
        name: 'Ivan',
      },
      type: '[auth] login',
    });
    expect(history.replace).toHaveBeenCalled();
  });
});
