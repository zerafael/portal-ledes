import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { MdAddCircleOutline } from 'react-icons/md';

import ProjectBox from '../../components/ProjectBox';

import api from '../../services/api';
import history from '../../services/history';

import { Container } from './styles';

function Projects() {
  const [projects, setProjects] = useState([]);

  const signed = useSelector(state => state.auth.signed);
  const admin = useSelector(state => state.auth.admin);

  useEffect(() => {
    async function loadProjects() {
      const response = await api.get('projects');

      setProjects(response.data);
    }

    loadProjects();
  }, []);

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
        <ProjectBox /*image={project.image} */ name={project.name} />
      ))}
    </Container>
  );
}

export default Projects;
