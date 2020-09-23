import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import App from './components/App';

const Routes = () => (
    <BrowserRouter>
        <Switch>
        <Route exact path="/">
            <Redirect to="/business" />
        </Route>
        <Route path='/:category' component={App} />
        </Switch>
    </BrowserRouter>
)

export default Routes;