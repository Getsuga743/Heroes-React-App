/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const charactersArr = characters.split(',');
  return (
    <div
      className="card ms-3  animate__animated animate__fadeIn"
      style={{ maxWidth: 540, marginTop: '2rem' }}
    >
      <div className="row no-gutters">
        <div className="col-md-4">
          <img
            alt={`${superhero} portrait`}
            src={`./assets/heroes/${id}.jpg`}
            className="card-img"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body align-items-end flex-column">
            <h4 className="card-title">{superhero}</h4>
            <p className="card-text strong">{alter_ego}</p>
            {alter_ego !== characters && (
              <p className="card-text">{charactersArr.slice(1)}</p>
            )}
            <p className="card-text">
              <small className="text-muted">{first_appearance}</small>
            </p>
            <Link to={`./heroe/${id}`}>Ver Más</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
