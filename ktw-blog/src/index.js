import React from 'react';
import ReactDOM from 'react-dom';
import './utils/common.scss';
import './index.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Home />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();
