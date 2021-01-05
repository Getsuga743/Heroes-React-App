/* eslint-disable no-console */
import heroes from '../data/heroes';

const getHeroesById = (id) => heroes.filter((heroe) => heroe.id === id);
export default getHeroesById;
