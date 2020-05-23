import React from 'react';
import ReactDOM from 'react-dom';
import './utils/common.scss';
import './index.css';
import Home from './components/Home';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();
