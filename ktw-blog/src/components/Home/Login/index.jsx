import React, { useState } from "react";
import { request } from "../../../utils";
import { API } from "../../../enums";

import "./Login.scss";

const Login = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [url, method] = API.USER.LOGIN();

  const onClickLogin = async (e) => {
    e.preventDefault();
    const result = await request({url, method, data: {id, pw}});
    console.log(result);
  }
  
  return (
  <section className="login">
    <strong>Login</strong>
    <div className="form">
      <form>
        <input
          type="text"
          name="id"
          placeholder="ID"
          maxLength="80"
          onChange={e => {setId(e.target.value)}}
        />
        <input
          type="password"
          name="pw"
          placeholder="Password"
          maxLength="30"
          onChange={e => {
            const { value } = e.target;
            setPw(value);
          }}
        />
        <input
          type="submit"
          value="Login"
          onClick={onClickLogin}
        />
      </form>
    </div>
  </section>
  );
}

export default Login;
