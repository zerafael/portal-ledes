import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #999;
  border-radius: 4px;

  &:hover {
    cursor: pointer;
  }

  img,
  svg {
    align-self: center;
    height: 134px;
    width: 134px;
    padding: 10px 10px;
    border-radius: 50%;
  }
`;

export const TextContent = styled.div`
  display: flex;
  padding: 10px 10px;
  border-top: 1px solid #999;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span {
    text-align: center;
  }
`;
