import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button } from "react-bootstrap";
import { ReactTyped } from "react-typed";
import heroImage from "../../../assets/chips.png";
import styles from "../../../styles/Landing/Hero.module.css";

const Hero = ({ onOpenModal }) => {
  return (
    <section className={`position-relative overflow-hidden ${styles.hero}`}>
      <div className="container py-lg-5 py-sm-5">
        <div className="row align-items-center">
          {/* Text Content */}
          <div className={`col-lg-6 order-2  order-lg-1 text-center text-lg-start`}>
            <div className={`d-inline-flex align-items-center gap-1 px-3 py-1 rounded-pill bg-success bg-opacity-10 text-success fw-medium mt-5`}>
              <span>✨</span>
              <span>Free shipping on orders $35+</span>
            </div>
            <h1 className={` display-4 fw-bold mt-5`}>
              Discover Your <br/>
              <span className="text-success">
                <ReactTyped
                  strings={["Favorite Snacks...","Fresh Groceries...","Hot Offers..."]}
                  typeSpeed={280}
                  backSpeed={80}
                  loop
                />
              </span>
            </h1>
            <p className={`lead text-muted my-5`}>
              From crispy chips to sweet treats, explore our collection of premium snacks from around the world.
            </p>
            {/* Trust Badges */}
            <div className={`d-flex  my-3 flex-wrap align-items-center gap-5 justify-content-center justify-content-lg-start`}>
              <div className="text-center">
                <p className="h4 fw-bold mb-0">500+</p>
                <p className="small text-muted mb-0">Products</p>
              </div>
              <div className="vr d-none d-md-block"></div>
              <div className="text-center">
                <p className="h4 fw-bold mb-0">50k+</p>
                <p className="small text-muted mb-0">Happy Customers</p>
              </div>
              <div className="vr d-none d-md-block"></div>
              <div className="text-center">
                <p className="h4 fw-bold mb-0">4.9★</p>
                <p className="small text-muted mb-0">Rating</p>
              </div>
            </div>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start my-2">
              <Button 
                variant="success" 
                size="lg" 
                className={`d-flex justify-content-center align-items-center px-4 py-3 fw-semibold`}
                onClick={onOpenModal}
              >
                <span className="d-flex align-items-center gap-2">
                  Shop Now <ArrowForwardIcon />
                </span>
              </Button>
              <Button 
                variant="outline-success" 
                size="lg" 
                className="d-flex justify-content-center align-items-center px-4 py-3 fw-semibold"
                onClick={onOpenModal}
              >
                <span className="d-flex align-items-center gap-2">
                  View Categories
                </span>
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="col-lg-6 order-1 order-lg-2 position-relative d-flex justify-content-center justify-content-lg-end">
            <div className={`rounded-3 overflow-hidden ${styles.heroContainer}`}>
              <img 
                src={heroImage} 
                alt="Assorted premium snacks" 
                className={`img-fluid ${styles.heroImage}`} 
              />
            </div>

            {/* Floating Badge */}
            <div className={`position-absolute bottom-0 start-0 translate-middle-x translate-lg-middle-x ${styles.overlay}`}>
              <div className="d-flex align-items-center gap-3 p-2 rounded-3" style={{backgroundColor:'rgba(241, 235, 235, 0.53)'}}>
                <div className="d-flex align-items-center justify-content-center bg-success bg-opacity-10 rounded-3 badge-icon">
                  <span className="fs-3">🎉</span>
                </div>
                <div>
                  <p className="fw-bold mb-0">20% OFF</p>
                  <p className="small text-muted mb-0">First Order</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
