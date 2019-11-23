import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.jpg';

import { Container, Content } from './styles';

function Header() {
  const signed = useSelector(state => state.auth.signed);
  const profile = useSelector(state => state.user.profile);

  return (
    <Container>
      <Content>
        <div>
          <img src={logo} alt="Logo" />
          <h1>
            Laboratório de Desenvolvimento e Pesquisa em Engenharia de Software
          </h1>
          <div>
            {signed ? <p>Olá, {profile.name}</p> : <a href="/admin">Login</a>}
          </div>
        </div>
        {/* <div className="menu"> */}
        <nav>
          <Link to="/">Home</Link>
          <Link to="/">SIGFAP</Link>
          <Link to="/">Redmine</Link>
          <Link to="/projetos">Projetos</Link>
          <Link to="/membros">Membros</Link>
          <Link to="/sobrenos">Sobre nós</Link>
          <Link to="/contato">Contato</Link>
        </nav>
        {/* </div> */}
      </Content>
    </Container>
  );
}

export default Header;
