import classNames from "classnames/bind";
import styles from "./HomePage.module.scss";

import TypeProduct from "../../components/TypeProduct/TypeProduct";
import SliderComponents from "../../components/Slider/Slider";
import slider1 from "../../assets/image/slider1.webp";
import slider2 from "../../assets/image/slider2.webp";
import slider3 from "../../assets/image/slider3.webp";
import CardComponent from "../../components/CardComponent/CardComponent";
import { Button } from "antd";
import { useState } from "react";
const cx = classNames.bind(styles);
const HomePage = () => {
  const arr = ["tu lanh", "ti vi", "laptop"];

  return (
    <div className={cx("wrapper")}>
      <div className={cx("product")}>
        {arr.map((item) => {
          return <TypeProduct name={item} key={item} />;
        })}
      </div>
      <div
        id="container"
        style={{
          backgroundColor: "#efefef",
          margin: "0 -120px",
        }}
      >
        <SliderComponents arrImg={[slider1, slider2, slider3]} />
        <div
          style={{
            padding: "20px 110px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems:"center",
              marginTop: "16px",
              width:"100%"
            }}
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

            <Button className={cx("view-more")} style={{ fontWeight: "600" }}>
              View more
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
