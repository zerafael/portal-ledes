import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 940px;
  margin: 30px auto;

  button {
    padding: 9px 18px;
    border-radius: 4px;
    font: 16px 'Roboto';
    font-weight: bold;
  }

  .edit {
    float: right;
    margin-bottom: 20px;
  }

  .buttons {
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;

    button {
      border: 0;
      color: #fff;
      transition: background 0.2s;
    }

    .save {
      background: #3b9eff;
      margin-left: 10px;

      &:hover {
        background: ${darken(0.05, '#3b9eff')};
      }
    }

    .cancel {
      background: #f64c75;

      &:hover {
        background: ${darken(0.05, '#f64c75')};
      }
    }
  }
`;

export const Content = styled.div`
  div {
    height: 500px;
  }
`;
