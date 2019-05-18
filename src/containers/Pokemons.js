import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

import PokemonList from '../components/PokemonList/';
import Spinner from '../components/Spinner/';
import Error from '../components/Error/';

const GET_POKEMONS_QUERY = gql`
  query GetPokemons {
    pokemons(first: 30) {
      id
      number
      name
      maxCP
      maxHP
      image
    }
  }
`;

export default class Pokemons extends Component {
  render() {
    return (
      <Query query={GET_POKEMONS_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <Spinner />;
          if (error) return <Error error={error} />;
          // return <PokemonList pokemons={data.pokemons} />;
          return <Spinner />;
        }}
      </Query>
    );
  }
}
