import React, { useState } from "react";
import { Row, Col, Image, Button } from "antd";
import { StarFilled,PlusOutlined,MinusOutlined } from "@ant-design/icons";
import classNames from "classnames/bind";
import styles from "./ProductDetailComponent.module.scss";
import imageProduct from "../../assets/image/test.webp";
import imageProductSmall from "../../assets/image/imagesmall.webp";

const cx = classNames.bind(styles);

const ProductDetailComponent = () => {
  const [ quantity , setQuantity] = useState(0)
  return (
    <Row className={cx("detail__image")}>
      <Col span={10}>
        <Image src={imageProduct} alt="Image of product" preview={false} />
        <Row justify="space-between" style={{ padding: "10px" }}>
          <Col span={4} style={{ flexBasis: "100px" }}>
            <div className={cx("leak-image")}>
              <Image
                src={imageProductSmall}
                alt="Image of product"
                preview={false}
                width="100%"
              />
            </div>
          </Col>
          <Col span={4} style={{ flexBasis: "100px" }}>
            <div className={cx("leak-image")}>
              <Image
                src={imageProductSmall}
                alt="Image of product"
                preview={false}
                width="100%"
              />
            </div>
          </Col>
          <Col span={4} style={{ flexBasis: "100px" }}>
            <div className={cx("leak-image")}>
              <Image
                src={imageProductSmall}
                alt="Image of product"
                preview={false}
                width="100%"
              />
            </div>
          </Col>
          <Col span={4} style={{ flexBasis: "100px" }}>
            <div className={cx("leak-image")}>
              <Image
                src={imageProductSmall}
                alt="Image of product"
                preview={false}
                width="100%"
              />
            </div>
          </Col>
          <Col span={4} style={{ flexBasis: "100px" }}>
            <div className={cx("leak-image")}>
              <Image
                src={imageProductSmall}
                alt="Image of product"
                preview={false}
                width="100%"
              />
            </div>
          </Col>
        </Row>
      </Col>
      <Col span={14}>
        <h1 className={cx("product__detail")}>
          Lorem id inventore, aliquam expedita nihil cupiditate.
        </h1>
        <div style={{margin:"16px 0"}}>
          <StarFilled style={{ fontSize: "12px", color: "rgb(253,216,54)" }} />
          <StarFilled style={{ fontSize: "12px", color: "rgb(253,216,54)" }} />
          <StarFilled style={{ fontSize: "12px", color: "rgb(253,216,54)" }} />
          <StarFilled style={{ fontSize: "12px", color: "rgb(253,216,54)" }} />
          <span style={{fontWeight:"400",color:"#ccc"}}> | Sold 1000+</span>
        </div>
        <div className={cx("price")}>
          <p className={cx("price__text")}>200.000 d</p>
          <p className={cx("address__product")}>
            <span>Delivery to</span>{" "}
            <span className={cx("address")}>Q.1 Ben Nghe, Tp.HCM</span> -{" "}
            <span className={cx("change-address")}>Change Address</span>
          </p>
        </div>
        <div className={cx("quantity")}>
          <p style={{fontWeight:"600", fontSize:"1.2rem"}}>Quantity:</p>
          <div className={cx("btn__quantity")}>
            <button onClick={()=> {
              setQuantity(prev => {
                
                return prev + 1
                })
            }} className={cx("btn")}><PlusOutlined /></button>
            <input className={cx("quantity__number")} value={quantity} onChange={e => setQuantity(prev => {
                  if(prev < 0)return 0;
              return e.target.value
            })} />
            <button onClick={()=> {
              setQuantity(prev => {
                  if(prev <= 0)return 0;
                return prev - 1
                })
            }} className={cx("btn")}><MinusOutlined /></button>
          </div>
        </div>
        <div className={cx("buy")}>
          <Button type="primary" danger className={cx('buy-btn')}>Choose to buy</Button>
          <button className={cx('buy-btn','btn-later')}>Buy later</button>
        </div>
      </Col>
    </Row>
  );
};

export default ProductDetailComponent;
