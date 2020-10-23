import React from 'react'
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import './Contents.scss'

import Spread from './Spread'
import Post from '../../Post'

const ContentsWrapper = styled.div`
  height: 100%;
  margin: 0 50px;
  overflow: auto;
`;

const Contents = () => {

  return (
    <ContentsWrapper>
      <Switch>
        <Route exact path="/:userId/:category/:docId" component={Post} />
        <Route exact path="/:userId/new" component={Post} />
        <Route exact path="/" component={Spread} />
      </Switch>
    </ContentsWrapper>
  )
}

export default Contents
