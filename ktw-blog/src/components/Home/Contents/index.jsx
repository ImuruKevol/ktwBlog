import React from 'react'
import { Switch, Route } from "react-router-dom";
import './Contents.scss'

import Spread from './Spread'
import Post from '../../Post'

const Contents = () => {

  return (
    <div className="content">
      <Switch>
        <Route exact path="/" component={Spread} />
        <Route exact path="/:user/:postId" component={Post} />
      </Switch>
    </div>
  )
}

export default Contents
