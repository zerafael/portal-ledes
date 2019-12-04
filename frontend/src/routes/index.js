import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Home from '../pages/Home';
import Login from '../pages/Login';
import NewsEdit from '../pages/NewsEdit';
import Projects from '../pages/Projects';
import ProjectEdit from '../pages/ProjectEdit';
import Members from '../pages/Members';
import MemberEdit from '../pages/MemberEdit';
import News from '../pages/News';
import AboutUs from '../pages/AboutUs';
import Contact from '../pages/Contact';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/admin" exact component={Login} />

      {/* <Route path="/noticias" exact component={News} /> */}
      <Route path="/noticias/:id" exact component={News} />
      <Route path="/noticia/nova" exact component={NewsEdit} />

      <Route path="/projetos" exact component={Projects} />
      <Route path="/projeto/novo" exact component={ProjectEdit} />

      <Route path="/membros" exact component={Members} />
      <Route path="/membro/novo" exact component={MemberEdit} />

      <Route path="/sobrenos" exact component={AboutUs} />
      <Route path="/contato" exact component={Contact} />
    </Switch>
  );
}

export default Routes;
