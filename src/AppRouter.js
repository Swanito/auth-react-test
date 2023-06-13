import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './App';
import PasswordRecovery from './PasswordRecovery';
import SignupForm from './SignupForm';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/password-recovery" component={PasswordRecovery} />
        {/* <Route path="/signup" component={SignupForm} /> */}
      </Switch>
    </Router>
  );
};

export default AppRouter;
