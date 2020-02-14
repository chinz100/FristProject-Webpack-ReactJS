import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import NotFound from './components/NotFound';
// <Route path='/:handle' component={} />
const Routes = (props) => (
  <Router {...props}>
    <Route path="*" component={NotFound} />
  </Router>
); 




export default Routes;