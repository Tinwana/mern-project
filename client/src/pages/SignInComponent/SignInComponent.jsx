import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames/bind";
import loginImg from "../../assets/image/logo-login.png";
import { CloseCircleTwoTone } from "@ant-design/icons";
import styles from "./SignInComponent.module.scss";
import { Button, Input } from "antd";
import { loginUser } from "../../Service/UserService";
import { useMutation } from "@tanstack/react-query";
import jwtDecoded from "jwt-decode";
import { useDispatch } from "react-redux";
import LoadingComponent from "../../components/LoadingComponent/LoadingComponent";
import { getDetailUser } from "../../Service/UserService";
import { updateUser } from "../../redux/slides/userSlide";

const cx = classNames.bind(styles);

const SignInComponent = ({ setShowLogin, setShowSignUp }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [disableBtn, setDisableBtn] = useState(true);
  const [emailValidate, setEmailValidate] = useState("");
  const dispatch = useDispatch();
  const emailRef = useRef();
  const passwordRef = useRef();
  const loginMutations = useMutation({
    mutationFn: (data) => loginUser(data),
  });
  const { data, isLoading } = loginMutations;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailValidate !== "") return;
    const email = emailRef.current?.input.value;
    const password = passwordRef.current?.input.value;
    const apiUrl = `user/sign-in`;
    loginMutations.mutate({
      email,
      password,
      apiUrl,
    });
  };
  useEffect(() => {
    if (loginMutations?.data?.status === "OK") {
      setShowLogin(false);
      setShowSignUp(false);
      localStorage.setItem("access_token", data?.access_token);
      if (data?.access_token) {
        const decoded = jwtDecoded(data?.access_token);
        if (!!decoded?.payload.id) {
          handleGetDetailUser(decoded.payload.id, data?.access_token);
        }
      }
    }
  }, [loginMutations]);
  const handleGetDetailUser = async (id, token) => {
    const res = await getDetailUser(id, token);
    dispatch(updateUser({ ...res?.data, access_token: token }));
  };
  return (
    <div
      onClick={(e) => {
        setShowLogin(false);
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
              setShowLogin(false);
            }}
          />
        </div>
        <div className={cx("signIn")}>
          <div className={cx("signIn-text")}>
            <h1>Hello!</h1>
            <p>Sign in right here.</p>
            {isLoading && <LoadingComponent size="middle" />}
          </div>
          <form onSubmit={handleSubmit} className={cx("signIn-form")}>
            <Input
              ref={emailRef}
              placeholder="Email"
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
            <span className={cx("validate-text")}>{emailValidate}</span>
            <div style={{ display: "flex", gap: "1rem" }}>
              <Input.Password
                ref={passwordRef}
                onChange={(e) => {
                  if (e.target.value != undefined && e.target.value != "") {
                    setDisableBtn(false);
                  } else {
                    setDisableBtn(true);
                  }
                }}
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
            <Button
              type="primary"
              danger
              htmlType="submit"
              disabled={disableBtn}
            >
              Login
            </Button>
            <div className={cx("forgot")}>
              <span style={{ color: "rgb(13,92,182", cursor: "pointer" }}>
                Forgot password?
              </span>
              <span>
                Dont't have an account?{" "}
                <span
                  style={{ color: "rgb(13,92,182", cursor: "pointer" }}
                  onClick={() => {
                    setShowSignUp(true);
                    setShowLogin(false);
                  }}
                >
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
