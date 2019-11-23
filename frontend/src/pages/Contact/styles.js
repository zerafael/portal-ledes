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
    padding: 5px 10px;
  }

  .buttons {
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;

    button {
      transition: background 0.2s;
    }

    .save {
      border: 0;
      background: #3b9eff;
      color: #fff;
      margin-left: 10px;

      &:hover {
        background: ${darken(0.05, '#3b9eff')};
      }
    }

    .cancel {
      border: 1px solid #f64c75;
      color: #f64c75;
      background: #fff;

      &:hover {
        border-color: ${darken(0.15, '#f64c75')};
        color: ${darken(0.15, '#f64c75')};
      }
    }
  }
`;

export const Content = styled.div`
  div {
    height: 500px;
  }
`;

export const ContentEdit = styled.div`
  display: flex;
  flex-direction: column;
`;
