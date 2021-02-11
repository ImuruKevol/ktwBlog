import React, { useEffect, useContext } from "react";
import Menu from "./Menu";
import Contents from "./Contents";
import Notification from "./Notification";
import { LoginDispatchContext } from "../../stores/LoginStore";
import { loginActionCreator } from "../../actions/LoginAction";
import { logout } from "../../utils/Request";
import "./Home.scss";

// TODO noti store 만들기
const Home = () => {
  const dispatch = useContext(LoginDispatchContext);

  useEffect(() => {
    return () => {
      dispatch(loginActionCreator.logout());
      logout();
    }
  }, []);

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

export default Home;
