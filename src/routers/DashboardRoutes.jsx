/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from '../components/Ui/Navbar';
import DcScreen from '../components/Dc/DcScreen';
import HeroeScreen from '../components/Heroes/HeroScreen';
import MarvelScreen from '../components/Marvel/MarvelScreen';
import SearchScreen from '../components/search/SearchScreen';

const DashboardRoutes = () => (
  <>
    <Navbar />
    <div>
      <Switch>
        <Route exact path="/marvel" component={MarvelScreen} />
        <Route exact path="/heroe/:heroeId" component={HeroeScreen} />
        <Route exact path="/search" component={SearchScreen} />
        <Route exact path="/dc" component={DcScreen} />
        <Redirect to="/" />
      </Switch>
    </div>
  </>
);

export default DashboardRoutes;
