import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Navbar.module.scss";
import { Checkbox,Rate } from "antd";

const cx = classNames.bind(styles);

const NavBarComponent = () => {
  const [rate , setRate] = useState(0)
  const renderContent = (type, option) => {
    switch (type) {
      case "text":
        return (
          <div className={cx("wrapper__title--text")}>
            {option.map((item) => {
              return (
                <span key={item} className={cx("navbar-title")}>
                  {item}
                </span>
              );
            })}
          </div>
        );
      case "checkbox":
        return (
          <Checkbox.Group
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: ".4rem",
            }}
          >
            {option.map((item) => (
              <Checkbox key={item.label} value={item.value}>
                {item.label}
              </Checkbox>
            ))}
          </Checkbox.Group>
        );
        case "star":
          return (
                <Rate style={{fontSize:"1.6rem"}} onChange={value => {
                  setRate(value)
                }} defaultValue={rate} />
          );
          case "price":
            return option.map((item) => (
              <div key={item} className={cx('wrapper__title--price')}>
                <span>{item}</span>
              </div>
            ))

      default:
        return {};
    }
  };
  return (
    <div className={cx("wrapper")}>
      <h4 className={cx("label")}>label</h4>
      {renderContent("text", ["tulanh", "tivi", "laptop"])}
      {renderContent("checkbox", [
        { value: "A", label: "a" },
        { value: "B", label: "b" },
      ])}
      {renderContent("star",[1,2,3,4,5])}
      {renderContent("price",["under 40000","top 50000"])}
    </div>
  );
};

export default NavBarComponent;
