import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './features/Login/views';


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>
            </Switch>
        </BrowserRouter>
    )
}