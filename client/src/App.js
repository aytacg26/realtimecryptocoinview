import React, { lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/UI/Navbar/Navbar';
import Landing from './components/layout/Landing/Landing';

const All = lazy(() => import('./components/layout/All/All'));

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/all' component={All} />
        <Route exact path='/' component={Landing} />
      </Switch>
    </Router>
  );
};

export default App;
