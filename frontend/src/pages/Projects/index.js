import React from 'react';
import { useSelector } from 'react-redux';
import { MdAddCircleOutline } from 'react-icons/md';

import ProjectBox from '../../components/ProjectBox';

import history from '../../services/history';

import { Container } from './styles';

const projects = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function Projects() {
  const signed = useSelector(state => state.auth.signed);
  const admin = useSelector(state => state.auth.admin);

  return (
    <Container>
      {signed && admin ? (
        <ProjectBox
          Icon={MdAddCircleOutline}
          name="Adicionar projeto"
          handleClick={() => history.push('/projeto/novo')}
        />
      ) : null}
      {projects.map(project => (
        <ProjectBox project={project} name={project} />
      ))}
    </Container>
  );
}

export default Projects;
