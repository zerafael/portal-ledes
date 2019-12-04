import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import MainNewsBox from '../../components/MainNewsBox';
import SecondaryNewsBox from '../../components/SecondaryNewsBox';
import NewsBox from '../../components/NewsBox';

import api from '../../services/api';
import history from '../../services/history';

import {
  Container,
  MainNewsWrapper,
  SecondaryNewsWrapper,
  NewsList,
} from './styles';

function Home() {
  const signed = useSelector(state => state.auth.signed);
  const admin = useSelector(state => state.auth.admin);

  const [news, setNews] = useState([]);

  useEffect(() => {
    async function loadNews() {
      const response = await api.get('news');

      setNews(response.data);
    }

    loadNews();
  }, []);

  return (
    <Container>
      <MainNewsWrapper>
        <MainNewsBox
          news={
            news[0] || { date: new Date().toISOString(), title: '', image: '' }
          }
          onClickFunc={() => {
            history.push(`/noticias/${news[0].id}`, { news: news[0] });
          }}
        />
        <SecondaryNewsWrapper>
          <SecondaryNewsBox
            news={
              news[1] || {
                date: new Date().toISOString(),
                title: '',
                image: '',
              }
            }
            onClickFunc={() => {
              history.push(`/noticias/${news[1].id}`, { news: news[1] });
            }}
          />
          <SecondaryNewsBox
            news={
              news[2] || {
                date: new Date().toISOString(),
                title: '',
                image: '',
              }
            }
            onClickFunc={() => {
              history.push(`/noticias/${news[2].id}`, { news: news[2] });
            }}
          />
        </SecondaryNewsWrapper>
      </MainNewsWrapper>

      {signed && admin ? (
        <button type="button" onClick={() => history.push('/noticia/nova')}>
          Nova Noticia
        </button>
      ) : null}

      <NewsList>
        {news.slice(3, news.length + 1).map(n => (
          <NewsBox
            key={n.id}
            news={{
              title: n.title,
              date: n.date,
              description: n.description,
            }}
            onClickFunc={() => {
              history.push(`/noticias/${n.id}`, { news: n });
            }}
          />
        ))}
      </NewsList>
    </Container>
  );
}

export default Home;
