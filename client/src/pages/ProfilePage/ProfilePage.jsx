import { useState } from "react";
import { useSelector } from "react-redux";
import classNames from "classnames/bind";
import { UserOutlined } from "@ant-design/icons";
import styles from "./ProfilePage.module.scss";
import { Button, Input } from "antd";

const cx = classNames.bind(styles);

const ProfilePage = () => {
  const user = useSelector((state) => state.user);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const [address, setAddress] = useState(user.address);
  const [readOnly, setReadOnly] = useState(false);
  return (
    <>
      <div className={cx("profile")}>
        <div className={cx("profile__option")}>
          <div className={cx("profile__option--avatar")}>
            <div className={cx("profile__option--image")}>
              {/* {user.avatar ? ( */}
              <img
                width={40}
                height={40}
                style={{ borderRadius: "50%", objectFit: "cover" }}
                src="https://cdn.wallpapersafari.com/55/83/Pl6QHc.jpg"
                alt="avatar"
              />
              {/* ) : ( */}
              {/* <UserOutlined style={{ fontSize: "30px" }} /> */}
              {/* )} */}
            </div>
            <div className={cx("profile__option--name")}>
              <p className={cx("name")}>{user.name ? user.name : user.email}</p>
            </div>
          </div>
          <div className={cx("profile__option--detail")}>
            <p className={cx("profile__logout")}>Log Out</p>
          </div>
        </div>
        <form className={cx("profile__detail")}>
          <h1 className={cx("detail__text")}>Customer Profile</h1>
          <div className={cx("detail__info")}>
            <div className={cx("detail__info--text")}>
              <p className={cx("text")}>
                <span
                  style={{
                    color: "#c4cacd",
                    display: "inline-block",
                    width: "64px",
                  }}
                >
                  Name:{" "}
                </span>{" "}
                {readOnly === false ? (
                  <span style={{ fontWeight: 600 }}>{user.name}</span>
                ) : (
                  <Input
                    style={{ width: "auto" }}
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                )}
              </p>
              <p className={cx("text")}>
                <span
                  style={{
                    color: "#c4cacd",
                    display: "inline-block",
                    width: "64px",
                  }}
                >
                  Email:{" "}
                </span>{" "}
                {readOnly === false ? (
                  <span style={{ fontWeight: 600 }}>{user.email}</span>
                ) : (
                  <Input
                    style={{ width: "auto" }}
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                )}
              </p>
              <p className={cx("text")}>
                <span
                  style={{
                    color: "#c4cacd",
                    display: "inline-block",
                    width: "64px",
                  }}
                >
                  Phone:{" "}
                </span>{" "}
                {readOnly === false ? (
                  <span style={{ fontWeight: 600 }}>{user.phone}</span>
                ) : (
                  <Input
                    style={{ width: "auto" }}
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                  />
                )}
              </p>
              <p className={cx("text")}>
                <span
                  style={{
                    color: "#c4cacd",
                    display: "inline-block",
                    width: "64px",
                  }}
                >
                  Address:{" "}
                </span>{" "}
                {readOnly === false ? (
                  <span style={{ fontWeight: 600 }}>{user.address}</span>
                ) : (
                  <Input
                    style={{ width: "auto" }}
                    value={address}
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                  />
                )}
              </p>
              <Button danger>Change password</Button>
            </div>
            <div className="detail__info--image"></div>
          </div>
          <div className={cx("profile__edit")}>
            <Button
              onClick={(e) => {
                setReadOnly(!readOnly);
              }}
              danger
              type="primary"
            >
              Edit Profile
            </Button>
            <Button htmlType="submit" disabled={!readOnly} type="primary">
              Update
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ProfilePage;
