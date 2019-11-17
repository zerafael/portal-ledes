import React, { useState, useEffect } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import api from '../../services/api';

import { Container, Content } from './styles';

function Contact() {
  const [editing, setEditing] = useState(false);
  const [content, setContent] = useState('');

  useEffect(() => {
    async function loadContent() {
      const response = await api.get('contact');

      setContent(response.data);
    }

    loadContent();
  }, []);

  function handleEdit() {
    setEditing(true);
  }

  async function handleSave() {
    const response = await api.post('contact');

    console.log(response.data);

    setEditing(false);
  }

  function handleCancel() {
    setEditing(false);
  }

  // TODO: Colocar botão de cancelar

  return (
    <Container>
      {editing ? (
        <>
          <Content>
            <CKEditor
              editor={ClassicEditor}
              data={content}
              onChange={(event, editor) => {
                setContent(editor.getData());
              }}
            />
          </Content>
          <div className="buttons">
            <button className="cancel" type="button" onClick={handleCancel}>
              Cancelar
            </button>
            <button className="save" type="button" onClick={handleSave}>
              Salvar
            </button>
          </div>
        </>
      ) : (
        <>
          <button className="edit" type="button" onClick={handleEdit}>
            Editar
          </button>
          <p>{content}</p>
        </>
      )}
    </Container>
  );
}

export default Contact;
