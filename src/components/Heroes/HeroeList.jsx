/* eslint-disable max-len */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React, { useMemo } from 'react';
import getHeroesByPublisher from '../../selectors/getHeroesByPublisher';
import HeroCard from './HeroCard';

const HeroeList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
  // Use memo nos permite recordar los datos, en este caso lo usamos para no volver a llamar a la funcion q busca los heroes
  // seteamos como callback la funcion getHeroesById, y como input(dependencias),pedimos q escuche el publisher, de esta forma
  // si este cambia, solo ahí, se volvería a llamar a la funcion para obtener los heroes por publisher
  return (
    <div className="card-columns animate__animated animate__fadeIn">
      {heroes.map((heroe) => (
        <HeroCard key={heroe.id} {...heroe} />
      ))}
    </div>
  );
};

export default HeroeList;
