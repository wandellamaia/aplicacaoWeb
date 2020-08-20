import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './features/Login/views/LoginPage';
import Record from './features/Record/views/RecordPage';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/registro" component={Record}/>
            </Switch>
        </BrowserRouter>
    )
}