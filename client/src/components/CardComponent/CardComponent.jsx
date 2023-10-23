import React from "react";
import { Button, Card } from "antd";
import { StarFilled } from "@ant-design/icons";
import { Divider } from "antd";
import classNames from "classnames/bind";
import styles from "./CardComponent.module.scss";
import logo from "../../assets/image/logo.png";

const cx = classNames.bind(styles);

const CardComponent = ({
  onClick,
  name,
  image,
  type,
  price,
  discount,
  sold,
  countInStock,
  ratting,
  description,
}) => {
  const formattedNumber = price.toLocaleString();
  return (
    <div onClick={onClick} className={cx("wrapper")}>
      <Card
        className={cx("card")}
        hoverable
        cover={
          <div className={cx("card__img")}>
            <div className={cx("producer")}>
              <img src={logo} alt="logo" width="100%" height="100%" />
            </div>
            <img
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              alt="example"
              src={image.primary}
            />
          </div>
        }
      >
        <div className={cx("card-title")}>
          <p className={cx("product-name")}>{name}</p>
          <div className={cx("ratting")}>
            <span>{ratting}</span>
            <StarFilled style={{ color: "yellow" }} />
            <Divider style={{ borderColor: "#333" }} type="vertical" />
            <span className={cx("sold")}>Sold {sold}</span>
          </div>
          <div className={cx("price")}>
            <span className={cx("price__sale")}>{formattedNumber} d</span>
            <span className={cx("price__reduce")}>{discount} %</span>
          </div>
          <div className={cx("option")}>
            <Button danger>Buy</Button>
            <Button
              className={cx("option__btn")}
              style={{ borderColor: "blue", color: "blue" }}
            >
              Detail
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CardComponent;
