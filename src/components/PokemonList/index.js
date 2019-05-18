import React from 'react';
import styled from 'styled-components';
import style from './PokemonList.style';


import PokemonItem from '../PokemonItem/';

const PokemonList = (props) => {
  return (
    <div className={props.className}>
      {props.pokemons.map(pokemon => <PokemonItem key={pokemon.id} pokemon={pokemon} />)}
    </div>
  );
}

export default styled(PokemonList)`
  ${style}
`;
