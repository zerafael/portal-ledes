import styled from 'styled-components';

export const Container = styled.div`
  margin: 50px auto;
  max-width: 940px;

  form {
    display: flex;
    flex-direction: column;

    label {
      font-size: 16px;
    }

    input,
    textarea,
    button {
      margin: 5px 0 20px 0;
    }

    input {
      border-radius: 4px;
      height: 34px;
      width: 40%;
      font-size: 16px;
    }

    textarea {
      border-radius: 4px;
      width: 100%;
      height: 150px;
      font-size: 16px;
    }

    button {
      padding: 5px 10px;
      border-radius: 4px;
    }
  }
`;

export const Members = styled.div`
  margin-bottom: 20px;
`;

export const Member = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;

  span {
    width: 200px;
  }

  strong {
    margin-right: 10px;
  }
`;
