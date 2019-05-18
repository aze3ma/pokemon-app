import React from 'react';
import styled from 'styled-components';
import style from './Error.style';

const Error = ({ className, error }) => (
  <div className={className}>
    <h2>Something went wrong.</h2>
    <details open>
      <pre>{JSON.stringify(error, null, 2)}</pre>
    </details>
  </div>
);

export default styled(Error)`
  ${style}
`;
