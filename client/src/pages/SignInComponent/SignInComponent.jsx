import React, { useState } from "react";
import classNames from "classnames/bind";
import loginImg from "../../assets/image/logo-login.png";
import {CloseCircleTwoTone} from "@ant-design/icons"
import styles from "./SignInComponent.module.scss";
import { Button, Input } from "antd";

const cx = classNames.bind(styles);

const SignInComponent = ({showLogin,setShowLogin}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div onClick={e => {
      setShowLogin(false)
    }} className={cx("wrapper")}>
      <div
      onClick={e => {
        e.stopPropagation()
      }}
        style={{
          display: "flex",
          justifyContent: "space-between",
          height: "445px",
          width: "800px",
          background: "#fff",
          position:"relative",
          borderRadius:"12px"
        }}
      >
      <div className={cx('close-icon')}>
      <CloseCircleTwoTone onClick={()=> {
        setShowLogin(false);
      }} />
      </div>
        <div className={cx("signIn")}>
          <div className={cx("signIn-text")}>
            <h1>Hello!</h1>
            <p>Sign in right here.</p>
          </div>
          <form action="" className={cx("signIn-form")}>
            <Input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
            <div style={{ display: "flex", gap: "1rem" }}>
              <Input.Password
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                visibilityToggle={{
                  visible: passwordVisible,
                  onVisibleChange: setPasswordVisible,
                }}
              />
              <Button
                style={{
                  width: 80,
                }}
                onClick={() => setPasswordVisible((prevState) => !prevState)}
              >
                {passwordVisible ? "Hide" : "Show"}
              </Button>
            </div>
            <Button type="primary" danger>
              Sign in
            </Button>
            <div className={cx("forgot")}>
              <span style={{ color: "rgb(13,92,182", cursor: "pointer" }}>
                Forgot password?
              </span>
              <span>
                Dont't have an account?{" "}
                <span style={{ color: "rgb(13,92,182", cursor: "pointer" }}>
                  Create now!
                </span>
              </span>
            </div>
          </form>
        </div>
        <div className={cx("signIn-image")}>
          <img src={loginImg} alt="login image" />
        </div>
      </div>
    </div>
  );
};

export default SignInComponent;
