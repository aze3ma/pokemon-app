import { css } from 'styled-components';

export default css`
  display: flex;
  background-color: #fff;
  width: 45%;
  min-height: 200px;
  max-height: 220px;
  margin-bottom: 45px;
  padding: 35px;
  border-radius: 10px;
  .card-cover {
    flex: 1;
    border-right: 1px solid #ddd;
    img {
      max-width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .card-body {
    flex: 2;
    padding-left: 50px;
    h3 {
      font-size: 28px;
    }
  }
  .card-meta {
    display: flex;
    justify-content: space-between;
    dt,
    dd {
      font-size: 18px;
      display: inline;
      padding-right: 10px;
    }
  }
`;
