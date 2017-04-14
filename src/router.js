import React from 'react';
import { Router, hashHistory } from 'react-router';

import Home from './components/Home';
import DataCollector from './containers/DataCollector';

const componentRoutes = {
  component: Home,
  path: '/',
  indexRoute: { component: DataCollector }
};

const Routes = () => {
  return (
    <Router history={hashHistory} routes={componentRoutes} />
  );
};

export default Routes;
