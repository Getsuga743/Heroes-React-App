import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginScreen from '../components/Login/LoginScreen';
import DashboardRoutes from './DashboardRoutes';

const AppRouter = () => (
  <Router>
    {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
    <Switch>
      <Route exact path="/login" component={LoginScreen} />
      <Route path="/" component={DashboardRoutes} />
    </Switch>
  </Router>
);

export default AppRouter;
