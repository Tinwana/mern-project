import React, { useState } from "react";
import classnames from "classnames/bind";
import { Badge, Col } from "antd";
import {
  WrapperHeader,
  WrapperTextHeader,
  WrapperAccountHeader,
  WrapperTextSmallHeader,
} from "./Style";
import Search from "antd/es/input/Search";
import {
  UserOutlined,
  CaretDownOutlined,
  ShoppingCartOutlined,
  SearchOutlined,
} from "@ant-design/icons";

import styles from "./header.module.scss";
import SignInComponent from "../../pages/SignInComponent/SignInComponent";
import SignUpComponent from "../../pages/SignUpComponent/SignUpComponent";
import { useSelector } from "react-redux";
const cx = classnames.bind(styles);

const Header = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const user = useSelector((state) => state.user);
  return (
    <>
      <WrapperHeader>
        <Col span={6}>
          <WrapperTextHeader>TINWANACROSS</WrapperTextHeader>
        </Col>
        <Col span={12}>
          <Search
            placeholder="input search text"
            enterButton
            size="large"
            allowClear
          />
        </Col>
        <Col
          span={6}
          style={{ display: "flex", gap: "20px", alignItems: "center" }}
        >
          <WrapperAccountHeader>
            {user?.name ? (
              <>
                {user.avatar ? (
                  <img
                    width={40}
                    height={40}
                    style={{ borderRadius: "50%", objectFit: "cover" }}
                    src={user.avatar}
                    alt="avatar"
                  />
                ) : (
                  <UserOutlined style={{ fontSize: "30px" }} />
                )}
                <div>
                  <span style={{ lineHeight: "1.8", cursor: "pointer" }}>
                    {" "}
                    <span>{user.email}</span>
                  </span>
                </div>
              </>
            ) : (
              <>
                <UserOutlined style={{ fontSize: "30px" }} />
                <div>
                  <span style={{ lineHeight: "1.8", cursor: "pointer" }}>
                    {" "}
                    <span
                      onClick={() => {
                        setShowLogin(true);
                      }}
                    >
                      Log In
                    </span>{" "}
                    /{" "}
                    <span
                      onClick={() => {
                        setShowSignUp(true);
                      }}
                    >
                      Sign Up
                    </span>
                  </span>
                  <div>
                    <span>Account</span>
                    <CaretDownOutlined />
                  </div>
                </div>
              </>
            )}
          </WrapperAccountHeader>
          <div>
            <Badge count={4} size="small">
              <ShoppingCartOutlined
                style={{ fontSize: "30px", color: "#fff" }}
              />
            </Badge>
            <WrapperTextSmallHeader>My Cart</WrapperTextSmallHeader>
          </div>
        </Col>
      </WrapperHeader>
      {/* model */}
      {showLogin && (
        <SignInComponent
          setShowLogin={setShowLogin}
          setShowSignUp={setShowSignUp}
          showLogin={showLogin}
        />
      )}
      {showSignUp && (
        <SignUpComponent
          setShowSignUp={setShowSignUp}
          setShowLogin={setShowLogin}
          showSignUp={showSignUp}
        />
      )}
    </>
  );
};

export default Header;
