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
const cx = classnames.bind(styles);

const Header = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
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
        <SignInComponent showLogin={showLogin} setShowLogin={setShowLogin} />
      )}
      {showSignUp && <SignUpComponent showSignUp={showSignUp} setShowSignUp={setShowSignUp} />}
    </>
  );
};

export default Header;
