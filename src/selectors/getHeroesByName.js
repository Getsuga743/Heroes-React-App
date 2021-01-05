import heroes from '../data/heroes';

const getHeroesByName = (heroName) => {
  if (heroName === '') {
    return [];
  }
  return heroes.filter((hero) => hero.superhero.toLowerCase().includes(heroName.toLowerCase()));
};

export default getHeroesByName;
