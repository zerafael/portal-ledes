import React from 'react';

import MemberBox from '../../components/MemberBox';

import { Container, Description, Members } from './styles';

function Project() {
  return (
    <Container>
      <h1>SIGFAP</h1>
      {/* <img src="" alt=""/> */}
      <Description />
      <Members>
        <h2>Membros</h2>
        <MemberBox />
        <MemberBox />
      </Members>
    </Container>
  );
}

export default Project;
