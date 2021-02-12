import React, { useEffect, useContext } from "react";
import Menu from "./Menu";
import Contents from "./Contents";
// import Notification from "./Notification";
import { LoginContext, LoginDispatchContext } from "../../stores/LoginStore";
import { loginActionCreator } from "../../actions/LoginAction";
import "./Home.scss";

// TODO noti store 만들기
const Home = () => {
  const { state } = useContext(LoginContext);
  const { userId } = state;
  const dispatch = useContext(LoginDispatchContext);

  useEffect(() => {
    if(!userId) dispatch(loginActionCreator.logout());
    return () => {
      dispatch(loginActionCreator.logout());
    }
  }, []);

  return (
    <main>
      {/* <NotificationStore> */}
        <Menu />
        <Contents />
        {/* <Notification /> */}
      {/* </NotificationStore> */}
    </main>
  )
}

export default Home;
