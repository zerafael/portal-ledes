import React, { useState } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { Container } from './styles';

function Contact() {
  const [editing, setEditing] = useState(true);

  return (
    <Container>
      {editing ? (
        <CKEditor
          editor={ClassicEditor}
          data="<p>Hello from CKEditor</p>"
          onInit={editor => {
            console.log('Editor is ready to use!', editor);
          }}
          onChange={(event, editor) => {
            console.log(event);
            console.log(editor);
          }}
        />
      ) : (
        <h1>naiugjnbf</h1>
      )}
    </Container>
  );
}

export default Contact;
