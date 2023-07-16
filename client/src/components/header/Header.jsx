import React from "react";
import classnames from "classnames/bind";
import { Col } from "antd";
import {
  WrapperHeader,
  WrapperTextHeader,
  WrapperAccountHeader,
  WrapperTextSmallHeader,
} from "./Style";
import Search from "antd/es/input/Search";
import { UserOutlined, CaretDownOutlined,ShoppingCartOutlined,SearchOutlined } from "@ant-design/icons";

import styles from './header.module.scss';
const cx = classnames.bind(styles)

const Header = () => {
  const searchIcon = <SearchOutlined />
  return (
    <>
      <WrapperHeader>
        <Col span={6}>
          <WrapperTextHeader>TINWANACROSS</WrapperTextHeader>
        </Col>
        <Col span={12}>
           <Search placeholder="input search text" enterButton size="large" allowClear />
        </Col>
        <Col span={6} style={{display:'flex',gap:'20px',alignItems:'center'}}>
          <WrapperAccountHeader>
            <UserOutlined style={{ fontSize: "30px" }} />
            <div>
              <span style={{lineHeight:"1.8"}}>Log In / Sign Up</span>
              <div>
                <span>Account</span>
                <CaretDownOutlined />
              </div>
            </div>
          </WrapperAccountHeader>
          <div>
            <ShoppingCartOutlined style={{fontSize:'30px', color:'#fff'}} />
            <WrapperTextSmallHeader>My Cart</WrapperTextSmallHeader>
          </div>
        </Col>
      </WrapperHeader>
    </>
  );
};

export default Header;
