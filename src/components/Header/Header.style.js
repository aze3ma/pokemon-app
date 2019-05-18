import { css } from 'styled-components';

export default css`
  background-color: white;
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 1px -1px rgba(0, 0, 0, 0.2), 0 -1px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
  z-index: 10;
  img {
    margin: 0 auto;
    height: 48px;
  }
`;
