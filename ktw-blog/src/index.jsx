import React from 'react';
import ReactDOM from 'react-dom';
import dotenv from 'dotenv';
import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { THEME } from "./enums";
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import SimpleModal from "./components/common/SimpleModal";
import * as serviceWorker from './serviceWorker';
import './index.scss';

dotenv.config();

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${THEME.DARK.THEME_COLOR_1};
    color: ${THEME.VS_CODE.FONT};
}
`;

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <SimpleModal />
      <Header />
      <Home />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();
