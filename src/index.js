import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createI18n, I18nProvider } from 'react-simple-i18n';

import { langData } from "./i18n/data";

let code = navigator.language || navigator.userLanguage;
if(code !== "pt-BR") {
  code = "en-US"
}
ReactDOM.render(
  (
    <I18nProvider i18n={createI18n(langData, { lang: code })}>
      <App />
    </I18nProvider>
  ), document.getElementById('root'));

