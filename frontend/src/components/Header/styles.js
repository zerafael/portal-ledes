import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #fff;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 2000px;
  margin: 0 auto;

  div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;

    img {
      height: 128px;
      margin-top: 10px;
      margin-left: 10px;
    }

    h1 {
      width: 600px;
      text-align: center;
      position: absolute;
      left: 30%;
    }

    div {
      position: absolute;
      right: 0%;
      top: 0%;
      margin: 25px 25px 0 0;

      a {
        padding: 5px 10px;
        border: 1px solid #000;
        border-radius: 4px;
        text-decoration: none;

        &:visited {
          color: #000;
        }

        &:hover {
          background: rgba(0, 0, 0, 0.1);
        }

        &:active {
          color: rgba(100, 100, 100, 0.5);
        }
      }
    }
  }

  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 10px;
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;
    background: #008ec1;

    a {
      color: #fff;
      font-weight: bold;
      padding: 15px 20px;

      &:hover {
        background: ${darken(0.05, '#008ec1')};
      }
    }
  }
`;
