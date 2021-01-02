/* eslint-disable react/prop-types */
import React from 'react';

const LoginScreen = ({ history }) => {
  const handleLogin = () => {
    history.replace('/');
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
