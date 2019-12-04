import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 940px;
  margin: 50px auto;

  img {
    width: 250px;
    float: left;
    margin: 0 10px 10px 0;
  }
`;

export const Info = styled.div`
  display: flex;
  margin-top: 15px;
`;

export const Author = styled.span`
  font-size: 16px;
  font-weight: bold;
  margin-right: 30px;
`;

export const Date = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

export const Separator = styled.div`
  height: 1px;
  background: #999;
  width: 100%;
  margin-bottom: 20px;
`;
