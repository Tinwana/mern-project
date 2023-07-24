import React, { useState } from "react";
import classnames from "classnames/bind";
import styles from "./TypeProductPage.module.scss";
import NavBarComponent from "../../components/NavBarComponent/NavBarComponent";
import CardComponent from "../../components/CardComponent/CardComponent";
import { Col, Pagination, Row } from "antd";

const cx = classnames.bind(styles);

const TypeProductPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  console.log(currentPage);
  return (
    <div className={cx("wrapper")}>
      <Row>
        <Col span={4}>
          <NavBarComponent />
        </Col>
        <Col
          span={20}
          className={cx('wrapper__product')}
        >
          <div className={cx("production")}>
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "16px",
            }}
          >
            <Pagination
              current={currentPage}
              onChange={(value) => {
                setCurrentPage(value);
              }}
              total={50}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default TypeProductPage;
