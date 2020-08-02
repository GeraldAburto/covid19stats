import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import CountryPage from './pages/CountryPage/CountryPage';
import CustomErrorPage from './pages/CustomErrorPage/CustomErrorPage';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/country/:country" component={CountryPage} />
      <Route path="/error" component={CustomErrorPage} />
      <Route path="/notfound" component={NotFoundPage} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  </Router>
);

export default Routes;
