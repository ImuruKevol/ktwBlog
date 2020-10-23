import React, { useState, useEffect } from "react";
import { request } from "../../utils";
import { API } from "../../enums";

import Menu from "./Menu";
import Login from "./Login";
import Contents from "./Contents";
import Notification from "./Notification";
import "./Home.scss";

// todo noti store 만들기
const Home = () => {
  // 로그인 상태 나타내는 expires라던가  방법 생각해보기
  // 로그아웃 버튼 만들기
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if(localStorage.getItem("login") === "false") {
      return;
    }
    const [url, method] = API.USER.VERIFY();
    request({
      url,
      method,
    }).then((res) => {
      if(res === "ok") {
        localStorage.setItem("login", true);
        setIsLogin(true);
      }
    });
  }, []);

  return (
    <main>
      {/* <NotificationStore> */}
        <Menu />
        {!isLogin && <Login
          setLogin={() => {
            setIsLogin(true);
          }}
        />}
        {isLogin &&
          <Contents
            logout={() => {
              setIsLogin(false);
            }}
          />
        }
        <Notification />
      {/* </NotificationStore> */}
    </main>
  )
}

export default Home;
