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
  getItem("User", "user", <UserOutlined />),
  getItem("Products", "products", <AppstoreOutlined />),
];
import classNames from "classnames/bind";
import styles from "./AdminPage.module.scss";
import renderPage from "../../utils/RenderPage";

const cx = classNames.bind(styles);

const AdminPage = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectKey, setSelectKey] = useState("home");
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
          width: 280,
          display: "flex",
        }}
      >
        <Button
          type="primary"
          onClick={toggleCollapsed}
          style={{
            backgroundColor: "#000",
            height: "100%",
            width: 52,
            textAlign: "center",
            borderRadius: 0,
          }}
        >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
        <Menu
          style={{
            boxShadow: "1px 1px 2px #ccc",
            height: "100vh",
          }}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
          items={items}
          onClick={handleClickItem}
          defaultSelectedKeys={["home"]}
        />
      </div>
      {renderPage(selectKey)}
    </div>
  );
};

export default AdminPage;
