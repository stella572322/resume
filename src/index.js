import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import App from './App';
import { I18nProvider } from './i18n';

ReactDOM.render(
  <I18nProvider>
    <Router basename={process.env.PUBLIC_URL}>
      <Route path="/" exact component={App} />
    </Router>
  </I18nProvider>
  , document.getElementById('root'));
serviceWorker.unregister();
