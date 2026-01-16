// import { Button } from "react-bootstrap"
// import Slider from "react-slick";
// import styles from "../../styles/Landing/Home.module.css";
import Product from "./allproducts/Product"

// const settings = {
//     dots: false,
//     infinite: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     speed: 250,
//     autoplaySpeed: 6000,
//     cssEase: "ease-out",
//     fade: false 
//     };
// styles 
// const {land1 , land2 , slider , slidetxt , font} = styles;
const Homeuser = () => {
      
  return (
    <>
        {/* <div className={`${slider} mx-auto mt-4`}>
            <Slider {...settings}>
                <div className={`${land1}`}>

                </div>
                <div className={`${land2}`}>
                </div>
            </Slider>
        </div> */}
        <Product/>
    </>
  )
}

export default Homeuser
