import React, { useReducer, useEffect } from 'react';
import AuthContext from './auth/AuthContext';
import authReducer from './auth/authReducer';
// eslint-disable-next-line import/no-named-as-default-member
import AppRouter from './routers/AppRouter';

const init = () => JSON.parse(localStorage.getItem('user')) || { logged: false };
// el usereducer es un hook q nos permite centralizar nuestro estado
// es como un useState mas complejo, preferible a la hora de usar estados complejos
// o cuando el proximo estado depende del anterior
const HeroesApp = () => {
  const [user, dispatch] = useReducer(authReducer, {}, init);
  useEffect(
    () => {
      localStorage.setItem('user', JSON.stringify(user));
    },
    [user],
  );
  // especificamos q vamos a distribuir a lo largo de nuestra aplicacion
  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      <AppRouter />
    </AuthContext.Provider>
  );
};

export default HeroesApp;
