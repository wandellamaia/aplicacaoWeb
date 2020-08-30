import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import Login from './features/Login/views/LoginPage';
import Record from './features/Record/views/RecordPage';
import history from './shared/history';

export default function Routes() {
  return (
    <>
      <CssBaseline />
      <Router history={history}>
        <Switch>
          <Route path="/Login" component={Login} />
          <Route path="/" exact component={Record} />
        </Switch>
      </Router>
    </>
  );
}
