import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 300px;
  height: 160px;
  border: 1px solid #000;

  img {
    height: 100%;
    width: 100%;
  }

  cursor: pointer;
`;

export const DateBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 50%;
  height: 30px;
  background: rgba(0, 142, 213, 0.9);
  bottom: 50px;
  border-top-right-radius: 4px;

  span {
    color: white;
    font-size: 14px;
  }
`;

export const TitleBox = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 50px;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);

  h4 {
    color: white;
    margin: 10px;
  }
`;
