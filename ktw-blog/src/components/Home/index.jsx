import React from 'react'
import './Home.scss'

import Menu from './Menu'
import Contents from './Contents'
import Notification from "./Notification"

// todo noti store 만들기
const Home = () => {
  return (
    <main>
      {/* <NotificationStore> */}
        <Menu />
        <Contents />
        <Notification />
      {/* </NotificationStore> */}
    </main>
  )
}

export default Home
