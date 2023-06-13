import React from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginForm from './LoginForm';
import PasswordRecovery from './PasswordRecovery';

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <Router>
        <Switch>
          <Route exact path="/" component={<LoginForm />} />
          <Route path="/password-recovery" component={<PasswordRecovery />} />
        </Switch>
      </Router>
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
