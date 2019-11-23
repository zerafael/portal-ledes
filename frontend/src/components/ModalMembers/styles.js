import styled from 'styled-components';
import { darken } from 'polished';
import PerfectScrollbar from 'react-perfect-scrollbar';

export const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.3);
  padding: 60px;
`;

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  height: 500px;
  width: 400px;
  background: #fff;
  margin: auto;
  border: 1px solid #999;
  border-radius: 4px;
  position: relative;

  h2 {
    padding: 20px 0;
    align-self: center;
  }
`;

export const Separator = styled.div`
  height: 1px;
  border: 0;
  background: #999;
  width: 400px;
`;

export const Wrapper = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  margin: 40px 20px;
  width: 320px;
  height: 100%;
`;

export const List = styled(PerfectScrollbar)`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-bottom: 20px;

  input {
    margin-right: 10px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    padding: 5px 10px;
    border-radius: 4px;
    font: 12px 'Roboto';
    font-weight: bold;
    transition: background 0.2s;
  }

  .add {
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
`;
