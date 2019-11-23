import React from 'react';

import { Container, TextContent } from './styles';

function MemberBox({ image, Icon, text, handleClick }) {
  return (
    <Container onClick={handleClick}>
      {Icon ? (
        <Icon />
      ) : (
        <img
          src={
            image ||
            `https://api.adorable.io/avatars/102/abott@adorable${text}.png`
          }
          alt="Avatar membro"
        />
      )}
      <TextContent>
        <span>{text}</span>
      </TextContent>
    </Container>
  );
}

export default MemberBox;
