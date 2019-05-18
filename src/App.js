import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { client } from './utils/client';

import Header from './components/Header/';
import Routes from './Routes';

function App() {
  return (
    <ApolloProvider client={client}>
      <div id="app">
        <Header />
        <Routes />
      </div>
    </ApolloProvider>
  );
}

export default App;
