import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { LoginContext, LoginDispatchContext } from "../../stores/LoginStore";
import { loginActionCreator } from "../../actions/LoginAction";
import { useInterval } from "../../utils";
import './Header.scss'

const Header = () => {
  const { state } = useContext(LoginContext);
  const location = useLocation();
  const [time, setTime] = useState(3600);
  const { userId } = state;
  const dispatch = useContext(LoginDispatchContext);

  const logout = () => {
    dispatch(loginActionCreator.logout());
  }

  useInterval(() => {
    setTime(time - 1);
  }, userId?1000:null);

  useEffect(() => {
    if(time === 0) logout();
  }, [time]);

  useEffect(() => {
    setTime(3600);
  }, [location]);

  return (
    <header className="header">
      <Link to="/">
        Kevol Writer(가제)
      </Link>
      {userId &&
      <div className="login-info">
        <span className="user-id">{userId}</span>
        <span className="session-time">{time}</span>
        <button className="btn-logout" onClick={logout}>Logout</button>
      </div>}
      {process.env.NODE_ENV === "development"?<button onClick={logout}>Logout</button>:null}
    </header>
  )
}

export default Header
