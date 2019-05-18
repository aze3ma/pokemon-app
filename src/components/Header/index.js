import React from 'react';
import styled from 'styled-components';
import style from './Header.style';

const Header = props => (
  <header className={props.className}>
    <h1>
      <img src="/assets/images/pokemon-logo.png" alt="pokemon logo" />
    </h1>
  </header>
);

export default styled(Header)`
  ${style}
`;
