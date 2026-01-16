import about from '../../assets/aboutimg.png';
import section21 from '../../assets/about-icons-1.svg';
import section22 from '../../assets/about-icons-2.svg';
import section23 from '../../assets/about-icons-3.svg';
import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import team2 from '../../assets/team-2.png'
import team3 from '../../assets/team-3.png'
import team5 from '../../assets/team-5.png'
import styles from '../../styles/Landing/About.module.css';

// styles
const {gapping} = styles ;

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
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

const About = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          {/* part 1 */}
          <div className="mx-auto my-5 col-12 col-lg-9 d-flex flex-column flex-lg-row justify-content-between align-items-center">
            <div className="w-100 w-lg-50 mb-3 mb-lg-0 my-3 my-lg-0"> {/* Added mb for spacing on small screens */}
              <h1 className='mx-5 mx-lg-0'>The Future of our Delivery:</h1>
              <p className='mx-4 mx-lg-0'>
                By powering the future of delivery with our retail partners, we give everyone access to the products they love and more time to enjoy it together.
              </p>
            </div>
            <div className="d-flex justify-content-center" style={{ width: '100%', maxWidth: '300px' }}> {/* Responsive image container */}
              <img src={about} className="img-fluid" alt="about-img" />
            </div>
          </div>
        </div>
          {/* part 2 */}
        <div className="mx-auto col-12 col-lg-12 d-flex flex-column">

          <h3 className="m-3 mb-4">Ready to get started?</h3>

          <div className="row d-flex justify-content-between mx-auto">
            {/* First Section */}
            <div className="col-12 col-md-4 mb-4 d-flex justify-content-center">
              <div style={{ backgroundColor: '#eee' }} className="p-5 rounded-3 w-100">
                <img src={section21} alt="section2-1" className="img-fluid mb-3" />
                <h4>Grow my business with Freshcart</h4>
                <p>Duis placerat, urna ut dictum lobortis, erat libero feugiat nulla, ullamcorper fermentum lectus dolor ut tortor.</p>
                <Button variant="outline-success" onClick={scrollToTop} className="w-75">eCoShop Platform</Button>
              </div>
            </div>

            {/* Second Section */}
            <div className="col-12 col-md-4 mb-4 d-flex justify-content-center">
              <div style={{ backgroundColor: '#eee' }} className="p-5 rounded-3 w-100">
                <img src={section22} alt="section2-2" className="img-fluid mb-3" />
                <h4>Advertise my brand on Freshcart</h4>
                <p>Duis placerat, urna ut dictum lobortis, erat libero feugiat nulla, ullamcorper fermentum lectus dolor ut tortor.</p>
                <Button variant="outline-success" onClick={scrollToTop} className="w-75">eCoShop ads</Button>
              </div>
            </div>

            {/* Third Section */}
            <div className="col-12 col-md-4 mb-4 d-flex justify-content-center">
              <div style={{ backgroundColor: '#eee' }} className="p-5 rounded-3 w-100">
                <img src={section23} alt="section2-3" className="img-fluid mb-3" />
                <h4>Learn more about our Freshcart</h4>
                <p>Vivamus non risus id sapien egestas tempus id sed lla mus justo metus, suscipit non hendrerit, erat libero.</p>
                <Button variant="outline-success" className="w-75" onClick={scrollToTop}>Learn more</Button>
              </div>
            </div>
          </div>

          <p className='mt-2 mb-5'>
            For assistance using Freshcart services, please visit our 
            <Link onClick={scrollToTop} className='text-decoration-none text-success m-2'>Help Center</Link>
          </p>
        </div>
      </div>

      {/* part 3 */}

      <div className='bg-success w-100 p-5 d-flex flex-column text-white mb-5'>
          <div className='col-12 col-md-9 mx-auto mb-5'>
              <h2>Trusted by retailers.</h2>
              <h2>Loved by customers.</h2>
              <p>We give everyone access to the food they </p>
              <p>love and more time to enjoy it together.</p>
          </div> 
          <div className='col-12 col-md-9 mx-auto d-flex flex-column flex-lg-row gap-5'>
              
              <div className={gapping} style={{display:'flex' , flexDirection:'row', width:'100%'}}>
                  
                  <div>
                      <h1>500k</h1>
                      <h6>Shoppers</h6>
                  </div>

                  <div>
                      <h1>4,500+</h1>
                      <h6>Cities</h6>
                  </div>
              
              </div>
              
              <div className={gapping} style={{display:'flex' , flexDirection:'row', width:'100%'}}>
                  
                  <div>
                      <h1>40k+</h1>
                      <h6>Stores</h6>
                  </div>
                  
                  <div>
                      <h1>650+</h1>
                      <h6>Retail Brands</h6>
                  </div>
              
              </div> 
          </div>
      </div>

      {/* part 4 */}
      <div className="w-50 mx-auto text-center mb-4" style={{borderBottom:'4px solid #f1f1f1'}}>
            <h1>Our Owners</h1>
      </div>

      <div className="d-flex justify-content-center align-items-center mb-5">
        <div className="slider-container w-75">
          <Slider {...settings}>

            <div className="d-flex justify-content-center">
              <div className="p-4 colorbg rounded-3 d-flex flex-column justify-content-between align-items-center text-center" 
                  style={{ width: '90%', minHeight: '300px',color:'green' }}>
                <img src={team2} alt="Snack 1" className="w-50 rounded"/>
                <h4>Shop Masters</h4>
                <p>Adam Bennett</p>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <div className="p-4 colorbg rounded-3 d-flex flex-column justify-content-between align-items-center text-center" 
                  style={{ width: '90%', minHeight: '300px',color:'green' }}>
                <img src={team3} alt="Snack 1" className="w-50 rounded"/>
                <h4>Business Owners</h4>
                <p>Ethan Carter</p>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <div className="p-4 colorbg rounded-3 d-flex flex-column justify-content-between align-items-center text-center" 
                  style={{ width: '90%', minHeight: '300px' , color:'green' }}>
                <img src={team5} alt="Snack 1" className="w-50 rounded"/>
                <h3>Web Architects </h3>
                <p>James Miller</p>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <div className="p-4 colorbg rounded-3 d-flex flex-column justify-content-between align-items-center text-center" 
                  style={{ width: '90%', minHeight: '300px',color:'green' }}>
                <img src={team2} alt="Snack 1" className="w-50 rounded"/>
                <h4>Shop Masters</h4>
                <p>Adam Bennett</p>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <div className="p-4 colorbg rounded-3 d-flex flex-column justify-content-between align-items-center text-center" 
                  style={{ width: '90%', minHeight: '300px',color:'green' }}>
                <img src={team3} alt="Snack 1" className="w-50 rounded"/>
                <h4>Business Owners</h4>
                <p>Ethan Carter</p>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <div className="p-4 colorbg rounded-3 d-flex flex-column justify-content-between align-items-center text-center" 
                  style={{ width: '90%', minHeight: '300px' , color:'green' }}>
                <img src={team5} alt="Snack 1" className="w-50 rounded"/>
                <h3>Web Architects </h3>
                <p>James Miller</p>
              </div>
            </div>

          </Slider>
        </div>
      </div>
    </>
  );
};

export default About;
