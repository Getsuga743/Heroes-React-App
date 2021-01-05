/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import AuthContext from '../../auth/AuthContext';
import types from '../../types/types';

const LoginScreen = ({ history }) => {
  const { dispatch } = useContext(AuthContext);
  const handleLogin = () => {
    const lastPath = localStorage.getItem('lastpath');
    dispatch({
      type: types.login,
      payload: {
        name: 'Ivan',
      },
    });
    history.replace(lastPath || '/marvel');
  };
  return (
    <div className="container mt-5 border">
      <h1>Login</h1>
      <button type="button" className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default LoginScreen;
