import React, { useState } from "react";
import crypto from "crypto";
import { request } from "../../../utils";
import { API } from "../../../enums";

import "./Login.scss";

const Login = (props) => {
  const { setLogin } = props;
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [url, method] = API.USER.LOGIN();

  const encrypt = (pw) => {
    return new Promise((resolve, reject) => {
      getSalt().then(salt => {
        crypto.pbkdf2(pw, salt, process.env.REACT_APP_SALT_NUMBER*1, 64, "sha512", (err, hash) => {
          if(err) {
            console.log(err);
            reject(err);
          }
          else {
            // console.log("id: ", id, "\npw: ", pw);
            // console.log("hash: ", hash.toString("base64"))
            // console.log("salt: ", salt)
            resolve(hash.toString("base64"));
          }
        });
      });
    })
  }

  const getSalt = async () => {
    const [url, method] = API.USER.LOGIN_SALT(id);
    const data = await request({
      url,
      method,
    });
    return data;
  }

  const onClickLogin = async (e) => {
    e.preventDefault();
    try{
      const encryptPW = await encrypt(pw);
      const data = await request({
        url,
        method,
        data: {
          id,
          pw: encryptPW,
        }
      });
      if(data) setLogin();
    }
    catch(err) {
      console.error(err);
      // id, pw 확인하라고 빨간색으로 로그인창 아래에 메세지(div) 출력
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
