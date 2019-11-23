import React, { useState, useEffect } from 'react';

import ModalMembers from '../../components/ModalMembers';

import { Container, Members, Member } from './styles';
import api from '../../services/api';

function ProjectEdit() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [members, setMembers] = useState([]);
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    async function loadRoles() {
      const response = await api.get('roles');

      setRoles(response.data);
    }

    loadRoles();
  }, []);

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleDescriptionChange(event) {
    setDescription(event.target.value);
  }

  async function handleSubmitButton(event) {
    event.preventDefault();

    // try {
    //   await api.post('members', {
    //     name,
    //     email,
    //     course,
    //     description,
    //     type,
    //   });

    //   // TODO: Manda para a página de detalhes do membro
    // } catch (err) {
    //   console.tron.log(err.response.data);
    // }
  }
  return (
    <>
      <Container>
        <ModalMembers
          show={show}
          showModal={setShow}
          setProjectMembers={setMembers}
        />
        <form onSubmit={handleSubmitButton}>
          <label htmlFor="name">
            Nome do projeto:
            <br />
            <input name="name" onChange={handleNameChange} />
          </label>

          <label htmlFor="description">
            Descrição:
            <br />
            <textarea onChange={handleDescriptionChange} />
          </label>

          <label htmlFor="picture">
            Logo:
            <br />
            <button name="picture" type="button">
              Escolher Arquivo
            </button>
          </label>

          <label htmlFor="members">
            Membros:
            <br />
            <button
              name="members"
              type="button"
              onClick={() => {
                setShow(true);
              }}
            >
              Adicionar membro
            </button>
          </label>

          {members.length !== 0 ? (
            <Members>
              {members.map(member => (
                <Member>
                  <span>{member.name}</span>

                  <strong>Função:</strong>
                  <select name={member.id}>
                    {roles.map(role => (
                      <option key={role.id} value={role.id}>
                        {role.name}
                      </option>
                    ))}
                  </select>
                </Member>
              ))}
            </Members>
          ) : null}

          <div>
            <button type="submit">Enviar</button>
          </div>
        </form>
      </Container>
    </>
  );
}

export default ProjectEdit;
