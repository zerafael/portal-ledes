import styled from 'styled-components';

export const Container = styled.div`
  width: 940px;
  margin: 30px auto;

  form {
    display: flex;
    flex-direction: column;

    input {
      margin-bottom: 10px;
    }

    textarea {
      height: 200px;
      width: 100%;
      margin-bottom: 10px;
    }

    label {
      button {
        margin: 0 0 10px 10px;
      }
    }

    button {
      padding: 5px 10px;
      border-radius: 4px;
      font: 14px 'Roboto';
    }
  }

  span {
    margin-bottom: 5px;
  }
`;
