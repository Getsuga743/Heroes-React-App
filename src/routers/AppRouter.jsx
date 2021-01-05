import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import AuthContext from '../auth/AuthContext';
import LoginScreen from '../components/Login/LoginScreen';
import DashboardRoutes from './DashboardRoutes';
import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';

const AppRouter = () => {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <PublicRoutes exact path="/login" component={LoginScreen} isAuthenticated={user.logged} />
        <PrivateRoutes
          path="/"
          component={DashboardRoutes}
          isAuthenticated={user.logged}
        />
      </Switch>
    </Router>
  );
};

export default AppRouter;
