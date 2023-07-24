import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./SignUpComponent.module.scss";
import loginImg from "../../assets/image/logo-login.png";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { CloseCircleTwoTone } from "@ant-design/icons";
import { Button, Input } from "antd";

const cx = classNames.bind(styles);

const SignUpComponent = ({ showSignUp, setShowSignUp }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  return (
    <div
      onClick={(e) => {
        setShowSignUp(false);
      }}
      className={cx("wrapper")}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        style={{
          display: "flex",
          justifyContent: "space-between",
          height: "445px",
          width: "800px",
          background: "#fff",
          position: "relative",
          borderRadius: "12px",
        }}
      >
        <div className={cx("close-icon")}>
          <CloseCircleTwoTone
            onClick={() => {
              setShowSignUp(false);
            }}
          />
        </div>
        <div className={cx("signIn")}>
          <div className={cx("signIn-text")}>
            <h1>Hello!</h1>
            <p>Sign up right here.</p>
          </div>
          <form action="" className={cx("signIn-form")}>
            <Input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
            <div
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <Input.Password
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
              <Input.Password
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
                placeholder="Confirm password"
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </div>
            <Button type="primary" danger>
              Sign in
            </Button>
            <div className={cx("forgot")}>
              <p>
                <span>You have an account?</span>
                <span style={{ color: "rgb(13,92,182", cursor: "pointer" }}>
                  Log in
                </span>
              </p>
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

export default SignUpComponent;
