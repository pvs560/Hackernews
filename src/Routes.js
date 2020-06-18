import React from 'react';
import { Router, Route, Switch} from 'react-router-dom';
import history from './helpers/history.js';
import HackerNewsContainer from './containers/index';

export const Routes = () => {
return <Router history={history}>
          <Switch>
            <Route exact path="/" component={HackerNewsContainer} />
          </Switch>
        </Router>
}