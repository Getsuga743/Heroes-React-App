import React from 'react';
import HeroeList from '../Heroes/HeroeList';

const MarvelScreen = () => (
  <div className="container mt-5">
    <h1>Marvel Screen</h1>
    <HeroeList publisher="Marvel Comics" />
  </div>
);

export default MarvelScreen;
