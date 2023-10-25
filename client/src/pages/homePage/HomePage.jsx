import classNames from "classnames/bind";
import styles from "./HomePage.module.scss";

import TypeProduct from "../../components/TypeProduct/TypeProduct";
import SliderComponents from "../../components/Slider/Slider";
import slider1 from "../../assets/image/slider1.webp";
import slider2 from "../../assets/image/slider2.webp";
import slider3 from "../../assets/image/slider3.webp";
import CardComponent from "../../components/CardComponent/CardComponent";
import { Button } from "antd";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { getAllProducts } from "../../Service/ProductService";
import useLoadingHook from "../../hooks/useLoadingHook";
const cx = classNames.bind(styles);
const HomePage = () => {
  const navigate = useNavigate();
  const arr = ["tu lanh", "ti vi", "laptop"];
  const { data: products, isLoading } = useQuery({
    queryKey: ["allProducts"],
    queryFn: getAllProducts,
    retry: 3,
  });
  useLoadingHook(isLoading);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("product")}>
        {arr.map((item, i) => {
          return <TypeProduct name={item} key={i} />;
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
              alignItems: "center",
              justifyContent: "center",
              marginTop: "16px",
              width: "100%",
            }}
          >
            <>
              <div className={cx("production")}>
                {products?.data?.products.map((product) => {
                  return (
                    <CardComponent
                      onClick={() => {
                        navigate(`product/detail/${product._id}`);
                      }}
                      key={product._id}
                      name={product.name}
                      image={product.image}
                      type={product.type}
                      price={product.price}
                      discount={product.discount}
                      sold={product.sold}
                      countInStock={product.countInStock}
                      ratting={product.ratting}
                      description={product.description}
                    />
                  );
                })}
              </div>

              <Button className={cx("view-more")} style={{ fontWeight: "600" }}>
                View more
              </Button>
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
