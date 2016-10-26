import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Root from '../containers/Root';
import Home from '../containers/Home';
import Database from '../containers/Database';

export default (
      <Route path="/" component={Root}>
          <IndexRoute component={Database} />
     </Route>
);
