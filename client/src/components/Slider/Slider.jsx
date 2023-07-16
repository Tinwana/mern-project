import Slider from "react-slick";
import classNames from "classnames/bind";
import styles from "./Slider.module.scss";
import { Image } from "antd";

const cx = classNames.bind(styles);
const SliderComponents = ({ arrImg }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:1500
  };
  return (
    <div style={{padding:"0 120px"}}>
    <Slider {...settings}>
        {arrImg.map(img => {
            return (
                <Image key={img} src={img} alt="Slider" preview={false} width="100%"/>
            )
        })}
    </Slider>
    </div>
  )
};

export default SliderComponents;
