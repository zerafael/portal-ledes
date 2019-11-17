import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Projects from '../pages/Projects';
import Members from '../pages/Members';
import News from '../pages/News';
import AboutUs from '../pages/AboutUs';
import Contact from '../pages/Contact';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/admin" exact isPrivate={false} component={Login} />
      <Route path="/projetos" exact component={Projects} />
      <Route path="/membros" exact component={Members} />
      <Route path="/sobrenos" exact component={AboutUs} />
      <Route path="/contato" exact component={Contact} />
      <Route path="/news" exact component={News} />
    </Switch>
  );
}

export default Routes;
