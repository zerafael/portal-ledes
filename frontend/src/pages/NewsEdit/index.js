import React, { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';

import api from '../../services/api';

import { Container } from './styles';

function NewsEdit() {
  const [description, setDescription] = useState('');

  async function handleSubmit({ title }) {
    await api.post('news', { title, description });
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="title">
          Título: <br />
          <Input name="title" />
        </label>

        <label htmlFor="description">
          Descrição: <br />
          <Input
            multiline
            name="description"
            defaultValue={null}
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </label>

        <label htmlFor="anexo">
          Anexo:
          <button name="anexo" type="button">
            Escolher arquivo
          </button>
        </label>

        <label htmlFor="thumbnail">
          Thumbnail:
          <button name="thumbnail" type="button">
            Escolher arquivo
          </button>
        </label>

        <div>
          <button type="submit">Enviar</button>
        </div>
      </Form>
    </Container>
  );
}

export default NewsEdit;
