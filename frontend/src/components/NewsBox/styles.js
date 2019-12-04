import styled from 'styled-components';

export const Container = styled.li`
  display: flex;
  flex-direction: row;
  padding: 10px 0;

  img {
    width: 250px;
  }

  cursor: pointer;
`;

export const TextBox = styled.div`
  border: 2px solid #000;
  border-radius: 4px;
  padding: 10px;
  margin-left: 10px;
  width: 90%;
  height: 174px;

  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Title = styled.h3``;

export const Date = styled.span``;

export const Description = styled.p`
  margin-top: 10px;
`;
