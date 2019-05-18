import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import PokemonDetailsC from '../components/PokemonDetails/';
import Spinner from '../components/Spinner/';
import Error from '../components/Error/';

const GET_POKEMON_DETAIL_QUERY = gql`
  query getPokemon($id: String) {
    pokemon(id: $id) {
      id
      number
      name
      image
      number
      maxCP
      maxHP
      evolutions {
        id
        name
        image
      }
    }
  }
`;

export default class PokemonDetails extends Component {
  render() {
    const { match } = this.props;
    return (
      <Query query={GET_POKEMON_DETAIL_QUERY} variables={{ id: match.params.pokemonId }}>
        {({ loading, error, data }) => {
          if (loading) return <Spinner />;
          if (error) return <Error error={error} />;

          return <PokemonDetailsC pokemon={data.pokemon} />;
        }}
      </Query>
    );
  }
}
