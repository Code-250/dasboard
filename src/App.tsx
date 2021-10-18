import React from 'react';
import {Login} from './components/login';
import './App.css';
import {ForgotPassword} from './components/forgotPassword';
import {ResetPassword} from './components/resetPassword';
import {Dashboard} from './components/layouts/dashboard'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/" component={Login}/>
        <Route exact={true} path="/forgot_password" component={ForgotPassword}/>
        <Route exact={true} path="/new_password" component={ResetPassword}/>
        <Route exact={true} path="/dashboard" component={Dashboard}/>
      </Switch>
    </Router>
  );
}

export default App;
