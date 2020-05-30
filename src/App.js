import React from 'react';
import styles from './App.module.css';
import LoginForm from './Containers/LoginForm/LoginForm';
import Dashboard from './Components/Dashboard/Dashboard';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

const Routes = () => {
  return (
    <Switch>
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/" component={LoginForm} />
    </Switch>
  );
};

const App = () => {
  return (
    <Router>
      <div>
        <Routes />
      </div>
    </Router>
  );
}

export default App;
