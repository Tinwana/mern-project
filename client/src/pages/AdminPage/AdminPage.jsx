import React, { useState } from "react";
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  UserOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { Button, Menu } from "antd";
import getItem from "../../utils/getItem";
const items = [
  getItem("Home", "home", <HomeOutlined />),
  getItem("User", "user", <UserOutlined />, [
    getItem("Option 5", "5"),
    getItem("Option 6", "6"),
    getItem("Option 7", "7"),
    getItem("Option 8", "8"),
  ]),
  getItem("Products", "products", <AppstoreOutlined />, [
    getItem("Option 9", "9"),
    getItem("Option 10", "10"),
  ]),
];
import classNames from "classnames/bind";
import styles from "./AdminPage.module.scss";

const cx = classNames.bind(styles);
const KeyComponent = ({ selectKey }) => <p>key {selectKey}</p>;

const AdminPage = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectKey, setSelectKey] = useState("");
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  const handleClickItem = ({ item, key, keyPath, domEvent }) => {
    setSelectKey(key);
  };
  return (
    <div className={cx("wrapper")}>
      <div
        style={{
          width: 256,
        }}
      >
        <Button
          type="primary"
          onClick={toggleCollapsed}
          style={{
            backgroundColor: "#000",
          }}
        >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
        <Menu
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
          items={items}
          onClick={handleClickItem}
        />
      </div>
      <KeyComponent selectKey={selectKey} />
    </div>
  );
};

export default AdminPage;
