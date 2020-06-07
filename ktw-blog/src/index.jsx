import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { THEME } from "./enums";
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import SimpleModal from "./components/common/SimpleModal";
import * as serviceWorker from './serviceWorker';

import './utils/common.scss';
import './index.css';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;
    font-size: 19px;
    color: ${THEME.VS_CODE.FONT};

    margin: 0;
    padding: 0;
    box-sizing: "border-box";
    ul {
      margin: 0;
    }
    ol {
      margin: 0;
    }
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <SimpleModal />
      {/* <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/editor" component={EditorPage} />
        <Route path="/:shareId" component={MainPage} />
      </Switch> */}
      <Header />
      <Home />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();
