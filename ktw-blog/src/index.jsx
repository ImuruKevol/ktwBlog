import React from 'react';
import ReactDOM from 'react-dom';
import dotenv from 'dotenv';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { THEME } from "./enums";
import Header from './components/Header';
import Login from "./components/Home/Login";
import Home from './components/Home';
import Footer from './components/Footer';
import SimpleModal from "./components/common/SimpleModal";
import { LoginStore } from "./stores/LoginStore";
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
  <BrowserRouter>
    <LoginStore>
      <GlobalStyle />
      <SimpleModal />
      <Header />
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route component={Home} />
      </Switch>
      <Footer />
    </LoginStore>
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.register();
