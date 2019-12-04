import React from 'react';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

import { Container, Info, Author, Date, Separator } from './styles';

function News(props) {
  const { news } = props.location.state;

  return (
    <Container>
      <h1>{news.title}</h1>
      <Info>
        <Author>Postado por: {news.User.name}</Author>
        <Date>
          {format(parseISO(news.date), "dd 'de' MMMM 'de' yyyy", {
            locale: pt,
          })}
        </Date>
      </Info>

      <Separator />
      <p>
        <img
          src={
            news.img ||
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQkedR9H3OM_Qfc85pShtKo-Qv5jvZU9SrwHRkh4g0sIxZbCwhq'
          }
          alt="Imagem"
        />
        {news.description}
      </p>
    </Container>
  );
}

export default News;
