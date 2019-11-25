import React, { useState, useEffect } from 'react';
import pt from 'date-fns/locale/pt-BR';
import DatePicker from 'react-datepicker';

import ModalMembers from '../../components/ModalMembers';

import { Container, Members, Member } from './styles';
import api from '../../services/api';

import 'react-datepicker/dist/react-datepicker.css';

function ProjectEdit() {
  const [show, setShow] = useState(false);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [dateStart, setDateStart] = useState(new Date());
  const [dateEnd, setDateEnd] = useState(new Date());

  const [members, setMembers] = useState([]);
  const [roles, setRoles] = useState([]);

  const [rolesMembers, setRolesMembers] = useState(new Map());

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

  function handleRoleChange(event) {
    const idMember = Number(event.target.name);
    const idRole = Number(event.target.value);

    setRolesMembers(rolesMembers.set(idMember, idRole));
  }

  async function handleSubmitButton(event) {
    event.preventDefault();

    if (rolesMembers.size !== members.length) {
      // TODO: Alert todos os membros precisam ter um papel
      return;
    }

    try {
      const response = await api.post('projects', {
        name,
        description,
        date_start: dateStart,
        date_end: dateEnd,
      });

      await api.post(`project/${response.data.id}/members`, {
        members: Array.from(rolesMembers.entries()).map(entry => {
          return {
            idMember: entry[0],
            idRole: entry[1],
          };
        }),
      });

      // TODO: Manda para a página de detalhes do projeto
    } catch (err) {
      console.tron.log(err.response.data);
    }
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

          <span>Data de inicio:</span>
          <DatePicker
            selected={dateStart}
            onChange={date => setDateStart(date)}
            dateFormat="dd/MM/yyyy"
            locale={pt}
          />

          <span>Data de fim:</span>
          <DatePicker
            selected={dateEnd}
            onChange={date => setDateEnd(date)}
            dateFormat="dd/MM/yyyy"
            locale={pt}
          />

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
                <Member key={member.id}>
                  <span>{member.name}</span>

                  <strong>Função:</strong>
                  <select name={member.id} onChange={handleRoleChange}>
                    <option key={0} value={0}>
                      Selecione...
                    </option>
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
