import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import App from './App';
import Prototype from './pages/prototype/Prototype';

ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
    <Route path="/" exact component={App} />
		<Route path="/prototype" component={Prototype} />
  </Router>
  , document.getElementById('root'));
serviceWorker.unregister();
