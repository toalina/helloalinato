// src/routes.js
import React from 'react';
import { Router, Route } from 'react-router';

import App from './components/App';
import About from './components/About';
import Services from './components/Services';
import NotFound from './components/NotFound';

const Routes = (props) => (
  <Router { ...props }>
    <Route component={ App }>
      <Route path="/about" component={ About } />
      <Route path="/services" component={ Services } />
      <Route path="*" component={ NotFound } />
    </Route>
  </Router>
);

export default Routes;
