/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import heroes from '../../data/heroes';
import useForm from '../../hooks/useForm';
import HeroCard from '../Heroes/HeroCard';
import getHeroesByName from '../../selectors/getHeroesByName';

const SearchScreen = ({ history }) => {
  const location = useLocation();
  // console.log(queryString.parse(location.search));
  const { q = '' } = queryString.parse(location.search);
  // extramos el nombre del heroe a buscar de la url, para eso usamos la librería de queryString
  // eso es lo q le pasamos como argumento a la funcion getHeroesByName
  const [values, handleInputChange, reset] = useForm({
    searchText: q,
  });
  const { searchText } = values;

  const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);
  const handleSearch = (e) => {
    e.preventDefault();
    // console.log(searchText);
    // esto modifica la url de la pagina
    history.push(`?q=${searchText}`);
    reset();
  };
  return (
    <div>
      <h1>Search Screen</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Search</h4>
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Find your hero"
              className="form-control"
              onChange={handleInputChange}
              value={searchText}
              name="searchText"
              autoComplete="off"
            />
            <button
              type="submit"
              className="btn m-1 btn-block btn-outline-primary"
            >
              Search
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {q === '' && (
            <div className="alert alert-info animate__animated animate__fadeIn">
              Search a hero
            </div>
          )}
          {q !== '' && heroesFiltered.length === 0 && (
            <div className="alert alert-danger  animate__animated animate__fadeIn">
              Hero not found...
            </div>
          )}

          {heroesFiltered.map((heroe) => (
            <HeroCard key={heroe.id} {...heroe} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchScreen;
