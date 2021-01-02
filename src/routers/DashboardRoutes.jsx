import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from '../components/Ui/Navbar';
import DcScreen from '../components/Dc/DcScreen';
import HeroeScreen from '../components/Heroes/HeroScreen';
import MarvelScreen from '../components/Marvel/MarvelScreen';

const DashboardRoutes = () => (
  <>
    <Navbar />
    <div>
      <Switch>
        <Route exact path="/marvel" component={MarvelScreen} />
        <Route exact path="/heroe:heroeId" componente={HeroeScreen} />
        <Route exact path="/dc" component={DcScreen} />
        <Redirect to="/marvel" />
      </Switch>
    </div>
  </>
);

export default DashboardRoutes;
