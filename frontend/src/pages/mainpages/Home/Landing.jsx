import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import Slider from "react-slick";
import { fetchProducts } from "../../../store/thunk/getproduct";
import styles from "../../../styles/Landing/Landing.module.css";

const Landing = () => {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => setShowModal(true);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 250,
    autoplaySpeed: 6000,
    cssEase: "ease-out",
    arrows: false, 
  };

  return (
    <div className={styles.landingContainer}>
      <div className={styles.sliderContainer}>
        <Slider {...settings}>
          <div className={`${styles.slide} ${styles.land1}`}>
            <div className={styles.slideText}>
              <p className={styles.slideBadge}>Free Shipping - orders over $100 Now!</p>
              <h1 className={styles.slideTitle}>Free Shipping on orders over $100</h1>
              <p>First-Time Customers Only, after promotions and discounts.</p>
              <Button variant="dark" onClick={handleShowModal}>Shop Now</Button>
            </div>
          </div>

          <div className={`${styles.slide} ${styles.land2}`}>
            <div className={styles.slideText}>
              <p className={styles.slideBadge}>Opening Sale Discount 50%</p>
              <h1 className={styles.slideTitle}>SuperMarket For Fresh Grocery</h1>
              <p>New model for online grocery shopping and convenient home delivery.</p>
              <Button variant="dark" onClick={handleShowModal}>Shop Now</Button>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Landing;
