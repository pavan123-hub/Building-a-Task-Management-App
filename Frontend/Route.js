import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import LoginPage from './LoginPage';
import HomePage from './HomePage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/home" component={HomePage} />
        <Redirect exact from="/" to="/login" />
      </Switch>
    </Router>
  );
};

export default App;