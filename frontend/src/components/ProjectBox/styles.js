import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #999;
  border-radius: 4px;
  overflow: hidden;

  &:hover {
    cursor: pointer;
  }

  img,
  svg {
    align-self: center;
    height: 110px;
    max-width: 236px;
  }

  svg {
    width: 110px;
    border: 0;
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
