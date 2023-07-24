import React from "react";
import { Button, Card } from "antd";
import { StarFilled } from "@ant-design/icons";
import { Divider } from "antd";
import classNames from "classnames/bind";
import styles from "./CardComponent.module.scss";
import logo from "../../assets/image/logo.png";

const cx = classNames.bind(styles);

const CardComponent = ({}) => {
  return (
    <div className={cx("wrapper")}>
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
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          </div>
        }
      >
        <div className={cx("card-title")}>
          <p className={cx("product-name")}>
            lipayobjects.com/rmsportal/QBnOOoLaAfKPirclipayobjects
          </p>
          <div className={cx("ratting")}>
            <span>5</span>
            <StarFilled style={{ color: "yellow" }} />
            <Divider style={{ borderColor: "#333" }} type="vertical" />
            <span className={cx("sold")}>Sold 3000</span>
          </div>
          <div className={cx("price")}>
            <span className={cx("price__sale")}>15.9000.000 d</span>
            <span className={cx("price__reduce")}> -12%</span>
          </div>
          <div className={cx("description")}>
            <p>lipayobjects.com/rmsportal/QBnOOoLaAfKPirc</p>
          </div>
          <div className={cx("option")}>
            <Button
              className={cx("option__btn")}
              style={{ borderColor: "blue", color: "blue" }}
            >
              Default
            </Button>
            <Button
              className={cx("option__btn")}
              style={{ borderColor: "blue", color: "blue" }}
            >
              Default
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CardComponent;
