import classNames from "classnames/bind";
import styles from "./HomePage.module.scss";

import TypeProduct from "../../components/TypeProduct/TypeProduct";
import SliderComponents from "../../components/Slider/Slider";
import slider1 from "../../assets/image/slider1.webp";
import slider2 from "../../assets/image/slider2.webp";
import slider3 from "../../assets/image/slider3.webp";
const cx = classNames.bind(styles);
const HomePage = () => {
  const arr = ["tu lanh", "ti vi", "laptop"];

  return (
    <>
        <div className={cx("product")}>
          {arr.map((item) => {
            return <TypeProduct name={item} key={item} />;
          })}
        </div>
          <div id='container' style={{ backgroundColor:"#efefef"}}>
            <SliderComponents arrImg={[slider1, slider2, slider3]} />
          </div>
    </>
  );
};

export default HomePage;
