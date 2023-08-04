import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames/bind";
import styles from "./SignUpComponent.module.scss";
import loginImg from "../../assets/image/logo-login.png";
import axios from "axios";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { CloseCircleTwoTone } from "@ant-design/icons";
import { Button, Input } from "antd";
import { BASE_URL } from "../../../public/env";
import { signUpUser } from "../../Service/UserService";
import { useMutation } from "@tanstack/react-query";
import LoadingComponent from "../../components/LoadingComponent/LoadingComponent";

const cx = classNames.bind(styles);

const SignUpComponent = ({ setShowLogin, setShowSignUp }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [disableBtn, setDisableBtn] = useState(true);
  const [emailValidate, setEmailValidate] = useState("");
  const [passwordValidate, setPasswordValidate] = useState("");
  const [passwordConfirmValidate, setPasswordConfirmValidate] = useState("");
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const signupMutation = useMutation({
    mutationFn:data => signUpUser(data)
  })
  const { data , isLoading } = signupMutation
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      emailValidate !== "" ||
      passwordValidate !== "" ||
      passwordConfirmValidate !== ""
    )
      return;
    const email = emailRef.current?.input.value;
    const password = passwordRef.current?.input.value;
    const passwordConfirm = passwordConfirmRef.current?.input.value;
    const apiUrl = `${BASE_URL}/user/sign-up`;

    signupMutation.mutate({
      email,
      password,
      passwordConfirm,
      apiUrl,
    });
  };
  useEffect(() => {
    if (signupMutation?.data?.status === "OK") {
      setShowLogin(false);
      setShowSignUp(false);
    }
  }, [signupMutation]);
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
        <div className={cx("signUp")}>
          <div className={cx("signIn-text")}>
            <h1>Hello!</h1>
            <p>Sign up right here.</p>
            {isLoading && <LoadingComponent size="middle" />}
          </div>
          <form onSubmit={handleSubmit} className={cx("signIn-form")}>
            <Input
              ref={emailRef}
              placeholder="Email..."
              name="username"
              required
              onBlur={(e) => {
                const isEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
                if (e.target.value === "" || e.target.value == undefined) {
                  setEmailValidate("This is required!");
                } else if (!isEmail.test(e.target.value)) {
                  setEmailValidate("This must an Email!");
                } else {
                  setEmailValidate("");
                }
              }}
            />
            {<span className={cx("validate-text")}>{emailValidate}</span>}
            <div
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <Input.Password
                required
                ref={passwordRef}
                name="password"
                placeholder="Password"
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
                onBlur={(e) => {
                  if (e.target.value === "" || e.target.value == undefined) {
                    setPasswordValidate("This is required!");
                  } else if (e.target.value.length < 8)
                    setPasswordValidate(
                      "Min length of password must be eight!"
                    );
                  else {
                    setPasswordValidate("");
                  }
                }}
              />
              <span className={cx("validate-text")}>{passwordValidate}</span>
              <Input.Password
                required
                ref={passwordConfirmRef}
                onChange={(e) => {
                  if (e.target.value != undefined && e.target.value != "") {
                    setDisableBtn(false);
                  } else {
                    setDisableBtn(true);
                  }
                }}
                name="passwordConfirm"
                placeholder="Confirm password"
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
                onBlur={(e) => {
                  if (e.target.value === "" || e.target.value == undefined) {
                    setPasswordConfirmValidate("This is required!");
                  } else if (
                    e.target.value !== passwordRef.current?.input?.value
                  ) {
                    setPasswordConfirmValidate("Wrong password confirm!");
                  } else {
                    setPasswordConfirmValidate("");
                  }
                }}
              />
              <span className={cx("validate-text")}>
                {passwordConfirmValidate}
              </span>
            </div>
            <Button
              disabled={disableBtn}
              type="primary"
              danger
              htmlType="submit"
            >
              Sign up
            </Button>
            <div className={cx("forgot")}>
              <p>
                <span>You have an account?</span>
                <span
                  style={{ color: "rgb(13,92,182", cursor: "pointer" }}
                  onClick={() => {
                    setShowSignUp(false);
                    setShowLogin(true);
                  }}
                >
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
