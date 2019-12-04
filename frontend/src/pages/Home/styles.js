import styled from 'styled-components';

export const Container = styled.div`
  width: 940px;
  margin: 50px auto;

  button {
    padding: 5px 10px;
    border-radius: 4px;
    font: 14px 'Roboto';
  }
`;

export const MainNewsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-bottom: 20px;
`;

export const SecondaryNewsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const NewsList = styled.ul`
  list-style: none;
  margin-top: 15px;
`;
