import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.jpg';

import { Container, Content } from './styles';

function Header() {
  return (
    <Container>
      <Content>
        <div>
          <img src={logo} alt="Logo" />
          <h1>
            Laboratório de Desenvolvimento e Pesquisa em Engenharia de Software
          </h1>
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
