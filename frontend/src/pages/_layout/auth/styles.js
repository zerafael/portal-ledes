import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  img {
    height: 150px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
  }

  input {
    background: rgba(0, 0, 0, 0.1);
    border: 0;
    border-radius: 4px;
    height: 44px;
    padding: 0 15px;
    color: rgba(50, 50, 50, 1);
    margin: 0 0 10px;
    font-size: 14px;
    font-weight: bold;

    &::placeholder {
      color: rgba(0, 0, 0, 0.4);
    }
  }

  span {
    color: #d8000c;
    align-self: flex-start;
    margin: 0 0 10px;
  }

  .button {
    margin: 5px 0 0;
    height: 44px;
    background: #3b9eff;
    border: 0;
    border-radius: 4px;
    font-weight: bold;
    font-size: 16px;
    color: #fff;
    transition: background 0.2s;
    cursor: pointer;

    &:hover {
      background: ${darken(0.05, '#3b9eff')};
    }
  }

  a {
    color: #fff;
    margin-top: 15px;
    font-size: 16px;
    opacity: 0.8;

    &:hover {
      opacity: 1;
    }
  }
`;
