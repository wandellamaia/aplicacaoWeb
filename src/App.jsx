import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import Login from './features/Login/views/LoginPage';
import Storie from './features/Record/views/RecordPage';
import StartPage from './features/Initial/views/InitialPage';
import Register from './features/Register/views/RegisterPage';
import history from './shared/history';

export default function Routes() {
  return (
    <>
      <CssBaseline />
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={StartPage} />
          <Route path="/Login" exact component={Login} />
          <Route path="/Storie" component={Storie} />
          <Route path="/Registro" component={Register} />
        </Switch>
      </Router>
    </>
  );
}
