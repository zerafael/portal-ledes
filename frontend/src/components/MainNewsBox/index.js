import React from 'react';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

import { Container, DateBox, TitleBox } from './styles';

function MainNewsBox({ news, onClickFunc }) {
  return (
    <Container onClick={onClickFunc}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQkedR9H3OM_Qfc85pShtKo-Qv5jvZU9SrwHRkh4g0sIxZbCwhq"
        alt="Imagem"
      />
      <DateBox>
        <span>
          {format(parseISO(news.date), "dd 'de' MMMM 'de' yyyy", {
            locale: pt,
          })}
        </span>
      </DateBox>
      <TitleBox>
        <h2>{news.title}</h2>
      </TitleBox>
    </Container>
  );
}

export default MainNewsBox;
