import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import product1 from '../../assets/product-img-1.jpg'
import product2 from '../../assets/product-img-2.jpg'
import product3 from '../../assets/product-img-5.jpg'
import product4 from '../../assets/product-img-7.jpg'
import product5 from '../../assets/product-img-9.jpg'
import product6 from '../../assets/product-img-10.jpg'
import ad from '../../assets/store-graphics.svg'
import styles from '../../styles/Landing/Features.module.css'

// styles
const {slidesbg} = styles
const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};
const scrolltoup = ()=> {window.scrollTo({top: 0, behavior:'smooth'})}

const Features = () => {
  return (
    <>
      <div className="container colorbg mt-4">
          <div className="row justify-content-around align-items-center">
              <h1 className="col-12 col-md-5 me-2">Snacks & Munchies</h1>
              <div className="col-12 col-md-5"><img src={ad} alt="ad" className="img-fluid"/></div>
          </div>
      </div>

      <div className="w-50 mx-auto text-center mb-3 mt-5" style={{borderBottom:'4px solid #f1f1f1'}}>
            <h1>New Products</h1>
      </div>
      
      <div className="d-flex justify-content-center align-items-center p-3 mb-5">
        <div className="slider-container w-75">
          <Slider {...settings}>

            <div className="d-flex justify-content-center">
              <div className={slidesbg} style={{ width: '90%', minHeight: '300px',border:'3px solid #f0f0f0' }}>
                <img src={product1} alt="Snack 1" className="w-50 rounded"/>
                <h3>Haldirams Sev Bhujia Spicy</h3>
                <p>Delicious and crispy popcorn in a variety of flavors.</p>
              </div>
            </div>
            
            <div className="d-flex justify-content-center">
              <div className={slidesbg} style={{ width: '90%', minHeight: '300px' ,border:'3px solid #f0f0f0'}}>
                <img src={product2} alt="Snack 1" className="w-50 rounded"/>
                <h3>NutriChoice Digestive Special</h3>
                <p>Delicious and crispy chips in a variety of flavors.</p>
              </div>
            </div>
            
            <div className="d-flex justify-content-center">
              <div className={slidesbg} style={{ width: '90%', minHeight: '300px' ,border:'3px solid #f0f0f0' }}>
                <img src={product3} alt="Snack 1" className="w-50 rounded"/>
                <h3>Salted Instant Popcorn</h3>
                <p>Delicious and crispy chips in a variety of flavors.</p>
              </div>
            </div>
            
            <div className="d-flex justify-content-center">
              <div className={slidesbg} style={{ width: '90%', minHeight: '300px',border:'3px solid #f0f0f0' }}>
                <img src={product4} alt="Snack 1" className="w-50 rounded"/>
                <h3>Britannia Cheese Slices</h3>
                <p>Delicious and crispy chips in a variety of flavors.</p>
              </div>
            </div>
            
            <div className="d-flex justify-content-center">
              <div className={slidesbg} style={{ width: '90%', minHeight: '300px',border:'3px solid #f0f0f0' }}>
                <img src={product5} alt="Snack 1" className="w-50 rounded"/>
                <h3>Slurrp Millet Chocolate</h3>
                <p>Delicious and crispy chips in a variety of flavors.</p>
              </div>
            </div>
            
            <div className="d-flex justify-content-center">
              <div className={slidesbg} style={{ width: '90%', minHeight: '300px',border:'3px solid #f0f0f0' }}>
                <img src={product6} alt="Snack 1" className="w-50 rounded"/>
                <h3>Amul Butter - 500 g</h3>
                <p>Delicious and crispy chips in a variety of flavors.</p>
              </div>
            </div>
          </Slider>
        </div>
      </div>

      <div className="container">
          <div className="row justify-content-center gap-5 mb-5 mt-2">
            <div className="col-12 col-md-5 colorbg p-5 rounded-3">
              <h1>Snacks & Munchies</h1>
              <p>Discover our unique and diverse snack and munchies. Enjoy our wide variety of products.</p>
              <button className="btn btn-success" onClick={scrolltoup}>View More</button>
            </div>
            <div className="col-12 col-md-5 colorbg p-5 rounded-3">
              <h1>Our Story</h1>
              <p>Our story begins with the heart of India, Our mission is to provide our customers with the best and most Delicious.</p>
              <button className="btn btn-success" onClick={scrolltoup}>Learn More</button>
            </div>
            <div className="col-12 col-md-5 colorbg p-5 rounded-3">
              <h1>Contact Us</h1>
              <p>If you have any questions, concerns, or need further information, please do not hesitate to contact us. We are here to help.</p>
              <button className="btn btn-success" onClick={scrolltoup}>Contact Us</button>
            </div>
            <div className="col-12 col-md-5 colorbg p-5 rounded-3">
              <h1>Join Our Community</h1>
              <p>Join our growing community of customers and loyalists. Get exclusive offers, discounts, and updates on our products and services.</p>
              <button className="btn btn-success" onClick={scrolltoup}>Join Community</button>
            </div>
          </div>
      </div>
    </>
  );
};

export default Features;
