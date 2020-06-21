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
        <Route exact path="/" component={Spread} />
        <Route exact path="/:user/:postId" component={Post} />
      </Switch>
    </ContentsWrapper>
  )
}

export default Contents
