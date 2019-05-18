import { css } from 'styled-components';

export default css`
  margin: 0 auto;
  margin-top: 150px;
  height: 100px;
  content: url('https://vignette.wikia.nocookie.net/pokemonreloaded/images/4/4c/Pokeball.png/revision/latest?cb=20160823223254&path-prefix=es');
  animation: spin infinite 2s linear;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
