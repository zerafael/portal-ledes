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

    select,
    input {
      margin: 0 0 20px 0;

      border-radius: 4px;
      height: 34px;
      width: 40%;
      font-size: 16px;
    }

    textarea {
      margin: 0 0 20px 0;
      border-radius: 4px;
      width: 100%;
      height: 150px;
      font-size: 16px;
    }

    button {
      padding: 5px 10px;
    }

    div {
      margin-top: 30px;
    }
  }
`;
