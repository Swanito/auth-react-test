import React from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import AppRouter from './AppRouter';

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <AppRouter />
  </I18nextProvider>,
  document.getElementById('root')
);