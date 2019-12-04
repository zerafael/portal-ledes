import React from 'react';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

import { Container, TextBox, Title, Date, Description } from './styles';

function NewsBox({ news, onClickFunc }) {
  return (
    <Container onClick={onClickFunc}>
      <img
        src={
          news.img ||
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQkedR9H3OM_Qfc85pShtKo-Qv5jvZU9SrwHRkh4g0sIxZbCwhq'
        }
        alt="Imagem"
      />
      <TextBox>
        <Title>{news.title}</Title>
        <Date>
          {format(parseISO(news.date), "dd 'de' MMMM 'de' yyyy", {
            locale: pt,
          })}
        </Date>
        <Description>{news.description}</Description>
      </TextBox>
    </Container>
  );
}

export default NewsBox;
