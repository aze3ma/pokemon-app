import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import style from './PokemonItem.style';

const PokemonItem = ({ className, pokemon }) => {
  return (
    <div className={className}>
      <div className="card-cover">
        <img src={pokemon.image} alt={pokemon.name} />
      </div>

      <div className="card-body">
        <h3>{pokemon.name}</h3>
        <dl className="card-meta">
          <div>
            <dt>Number:</dt>
            <dd>{pokemon.number}</dd>
          </div>
          <div>
            <dt>maxCP:</dt>
            <dd>{pokemon.maxCP}</dd>
          </div>
          <div>
            <dt>maxHP:</dt>
            <dd>{pokemon.maxHP}</dd>
          </div>
        </dl>
      </div>
      <div className="card-link">
        <Link to={`/${pokemon.id}`}>More information</Link>
      </div>
    </div>
  );
};

export default styled(PokemonItem)`
  ${style}
`;
