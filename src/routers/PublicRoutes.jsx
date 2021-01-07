/* eslint-disable react/prop-types */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

const PublicRoutes = ({ isAuthenticated, component: Component, ...rest }) => {
  return (
    <Route {...rest}>
      {(props) => ((!isAuthenticated) ? <Component {...props} /> : <Redirect to="/" />)}
    </Route>
  );
};

PublicRoutes.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};
export default PublicRoutes;
