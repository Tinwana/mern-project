import React, { useMemo, useState } from "react";
import classnames from "classnames/bind";
import { Link } from "react-router-dom";
import { Badge, Button, Col, Popover } from "antd";
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
import { logOutUser } from "../../Service/UserService";
import { useSelector, useDispatch } from "react-redux";
import { resetUser } from "../../redux/slides/userSlide";
const cx = classnames.bind(styles);
// const text = <span>Title</span>;

const Header = () => {
  const dispatch = useDispatch();
  const [showArrow, setShowArrow] = useState(true);
  const [arrowAtCenter, setArrowAtCenter] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const mergedArrow = useMemo(() => {
    if (arrowAtCenter)
      return {
        pointAtCenter: true,
      };
    return showArrow;
  }, [showArrow, arrowAtCenter]);
  const user = useSelector((state) => state.user);
  const handleLogout = async (e) => {
    await logOutUser();
    dispatch(resetUser());
  };
  const content = (
    <div className={cx("content")}>
      <button className={cx("content__hover")}>
        <Link style={{ color: "#000" }} to="/profile">
          Profile
        </Link>
      </button>
      <button onClick={handleLogout} className={cx("content__hover")}>
        Log Out
      </button>
    </div>
  );

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
            {user.refreshToken !== "" ? (
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
                    <Popover
                      placement="bottom"
                      // title={text}
                      content={content}
                      arrow={mergedArrow}
                      trigger="click"
                      mouseLeaveDelay={1000}
                      motion={React}
                      destroyTooltipOnHide
                    >
                      <Button
                        style={{
                          color: "white",
                          backgroundColor: "transparent",
                        }}
                        type="text"
                        block
                      >
                        <span className={cx("username")}>
                          {user.name ? user.name : user.email}
                        </span>
                      </Button>
                    </Popover>
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
