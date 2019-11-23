import React from 'react';

import { Container, TextContent } from './styles';

function ProjectBox({ image, Icon, name, handleClick }) {
  return (
    <Container onClick={handleClick}>
      {Icon ? (
        <Icon />
      ) : (
        <img
          src={image || 'http://www.ledes.net/img/sigfap.png'}
          alt="Logo Projeto"
        />
      )}
      <TextContent>
        <span>{name}</span>
      </TextContent>
    </Container>
  );
}

export default ProjectBox;
