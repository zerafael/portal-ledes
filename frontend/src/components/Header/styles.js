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
      position: absolute;
      left: 25%;
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
