/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoutes = ({ isAuthenticated, component: Component, ...rest }) => {
  localStorage.setItem('lastpath', rest.location.pathname);
  return (
    <Route {...rest}>
      {(props) => (isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />)}
    </Route>
  );
};

PrivateRoutes.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};
export default PrivateRoutes;
