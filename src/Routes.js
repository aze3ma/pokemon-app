import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Pokemons from './containers/Pokemons';
import PokemonDetails from './containers/PokemonDetails';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Pokemons} />
        <Route path="/:pokemonId" component={PokemonDetails} />
      </Switch>
    </Router>
  );
};

export default Routes;
