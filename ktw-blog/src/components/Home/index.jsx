import React from "react";
import "./Home.scss";

import Menu from "./Menu";
import Login from "./Login";
import Contents from "./Contents";
import Notification from "./Notification";

// todo noti store 만들기
const Home = () => {
  return (
    <main>
      {/* <NotificationStore> */}
        <Menu />
        <Login />
        {/* <Contents /> */}
        <Notification />
      {/* </NotificationStore> */}
    </main>
  )
}

export default Home;
