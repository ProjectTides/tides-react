import React from 'react';
import styles from './App.module.css';
import LoginForm from './Containers/LoginForm/LoginForm';
import Dashboard from './Components/Dashboard/Dashboard';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from '@apollo/react-hooks';

const Routes = () => {
  return (
    <Switch>
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/" component={LoginForm} />
    </Switch>
  );
};

const App = () => {
  const client = new ApolloClient({
    uri: 'http://localhost:4000/api',
  });
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Routes />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
