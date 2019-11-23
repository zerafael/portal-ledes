import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import api from '../../services/api';

import { Container, Content, ContentEdit } from './styles';

function Contact() {
  const signed = useSelector(state => state.auth.signed);
  const profile = useSelector(state => state.user.profile);

  const [editing, setEditing] = useState(false);
  const [content, setContent] = useState('');

  useEffect(() => {
    async function loadContent() {
      const response = await api.get('contact');

      setContent(response.data[0].content);
    }

    loadContent();
  }, []);

  function handleEdit() {
    setEditing(true);
  }

  async function handleSave() {
    await api.post('contact', {
      content,
    });

    setEditing(false);
  }

  function handleCancel() {
    setEditing(false);
  }

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
        <ContentEdit>
          {signed && profile.admin === true ? (
            <div>
              <button className="edit" type="button" onClick={handleEdit}>
                Editar
              </button>
            </div>
          ) : null}
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </ContentEdit>
      )}
    </Container>
  );
}

export default Contact;
