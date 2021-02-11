import React, { useState, useContext } from "react";
import { useHistory } from "react-router";
import { request } from "../../../utils";
import { API } from "../../../enums";
import { LoginDispatchContext } from "../../../stores/LoginStore";
import { loginActionCreator } from "../../../actions/LoginAction";
import "./Login.scss";

const Login = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useContext(LoginDispatchContext);
  const history = useHistory();
  const [url, method] = API.USER.LOGIN();

  const onClickLogin = async (e) => {
    e.preventDefault();
    try{
      const result = await request({
        url,
        method,
        data: {
          id,
          pw,
        }
      });
      if(result) {
        setError(false);
        const { userId } = result;
        dispatch(loginActionCreator.login(userId));
        history.push("/");
      }
    }
    catch(err) {
      console.error(err);
      setError(true);
    }
  }

  const onKeyDown = e => {
    const { key } = e;
    if(key === "Enter") {
      onClickLogin(e);
    }
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
          onChange={e => setId(e.target.value)}
        />
        <input
          type="password"
          name="pw"
          placeholder="Password"
          maxLength="100"
          onChange={e => setPw(e.target.value)}
          onKeyDown={onKeyDown}
        />
        {error?
        <div className="error-msg">
          Login Failed
        </div>
        :null}
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
