import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import Login from './features/Login/views/LoginPage';
import Story from './features/Story/views/StoryPage';
import Stories from './features/Stories/views/StoriesPage';
import StartPage from './features/Initial/views/StartPage';
import Register from './features/Register/views/RegisterPage';
import About from './features/About/views/AboutPage';
import Forget from './features/Forget/views/ForgetPage';
import history from './shared/history';

export default function Routes() {
  return (
    <>
      <CssBaseline />
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={StartPage} />
          <Route path="/Login" exact component={Login} />
          <Route path="/Story" component={Story} />
          <Route path="/Stories" component={Stories} />
          <Route path="/Registro" component={Register} />
          <Route path="/Sobre" component={About} />
          <Route path="/EsqueciSenha" component={Forget} />
        </Switch>
      </Router>
    </>
  );
}
