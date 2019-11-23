import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import { Container } from './styles';

function MemberEdit() {
  const [types, setTypes] = useState([]);

  const [name, setName] = useState('');
  const [type, setType] = useState(1);
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    async function loadTypes() {
      const response = await api.get('types');

      setTypes(response.data);
    }

    loadTypes();
  }, []);

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleTypeChange(event) {
    setType(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handleCourseChange(event) {
    setCourse(event.target.value);
  }

  function handleDescriptionChange(event) {
    setDescription(event.target.value);
  }

  async function handleSubmitButton(event) {
    event.preventDefault();

    try {
      await api.post('members', {
        name,
        email,
        course,
        description,
        type,
      });

      // TODO: Manda para a página de detalhes do membro
    } catch (err) {
      console.tron.log(err.response.data);
    }
  }

  return (
    <Container>
      <form onSubmit={handleSubmitButton}>
        <label htmlFor="name">
          Nome:
          <br />
          <input name="name" onChange={handleNameChange} />
        </label>

        <label htmlFor="type">
          Cargo:
          <br />
          <select name="type" onChange={handleTypeChange}>
            {types.map(type => (
              <option key={type.id} value={type.id}>
                {type.name}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="email">
          Email:
          <br />
          <input name="email" onChange={handleEmailChange} />
        </label>

        <label htmlFor="course">
          Curso:
          <br />
          <input name="course" onChange={handleCourseChange} />
        </label>

        <label htmlFor="description">
          Descrição:
          <br />
          <textarea onChange={handleDescriptionChange} />
        </label>

        <label htmlFor="picture">
          Foto:
          <br />
          <button name="picture" type="button">
            Escolher Imagem
          </button>
        </label>

        <div>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </Container>
  );
}

export default MemberEdit;
