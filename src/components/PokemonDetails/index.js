import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import style from './PokemonDetails.style';

const PokemonDetails = ({ className, pokemon }) => {
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
        {pokemon.evolutions && (
          <div className="evolution-list">
            {pokemon.evolutions.map((evolution, idx) => (
              <div className="evolution-card" key={idx}>
                <div className="evolution-cover">
                  <img src={evolution.image} alt={evolution.name} />
                </div>
                <h4>{evolution.name}</h4>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="card-link">
        <Link to="/">{'< '}Back to pokemons</Link>
      </div>
    </div>
  );
};

export default styled(PokemonDetails)`
  ${style}
`;
