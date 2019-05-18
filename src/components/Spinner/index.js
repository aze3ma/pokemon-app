import React from 'react';
import styled from 'styled-components';
import style from './Spinner.style';

const Spinner = props => (
  <div className={props.className}>
    <span className="spinner" />
  </div>
);

export default styled(Spinner)`
  ${style}
`;
