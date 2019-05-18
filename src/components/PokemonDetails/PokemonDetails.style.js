import { css } from 'styled-components';

export default css`
  display: flex;
  background-color: #fff;
  margin-bottom: 45px;
  padding: 35px;
  border-radius: 10px;
  width: 80%;
  min-height: 700px;
  justify-content: center;
  margin: auto;
  position: relative;
  .card-cover {
    flex: 1;
    border-right: 1px solid #ddd;
    padding-right: 50px;
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
    justify-content: flex-start;
    align-items: center;
    flex-flow: row wrap;
    div {
      flex: auto;
    }
    dt,
    dd {
      font-size: 18px;
      display: inline;
      padding-right: 10px;
    }
    margin-bottom: 35px;
  }
  .card-link {
    position: absolute;
    bottom: 45px;
    right: 45px;
    font-size: 18px;
  }
  .evolution-list {
    display: flex;
    flex-flow: column wrap;
  }
  .evolution-card {
    display: flex;
    background-color: #fff;
    max-height: 200px;
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 10px;
    margin-bottom: 25px;
    h4 {
      flex: 2;
      font-size: 18px;
      padding-left: 25px;
    }
    .evolution-cover {
      flex: 1;
      margin-right: 15px;
      border-right: 1px solid #ddd;
    }
    img {
      max-width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
