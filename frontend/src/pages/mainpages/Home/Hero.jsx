import { Button } from "react-bootstrap";
import heroImage from "../../../assets/snaacks.jpg";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import "../../../styles/Landing/Hero.module.css";
import { ReactTyped } from "react-typed";


const Hero = ({ onOpenModal }) => {
  return (
    <section className="hero-section position-relative overflow-hidden">
      <div className="container py-4 py-md-7">
        <div className="row align-items-center g-4">
          {/* Text Content */}
          <div className="col-lg-6 order-2 order-lg-1 text-center text-lg-start hero-text">
            <div className="d-inline-flex align-items-center gap-1 px-3 py-1 rounded-pill bg-success bg-opacity-10 text-success fw-medium mb-3">
              <span>✨</span>
              <span>Free shipping on orders $35+</span>
            </div>
            <h1 className="display-4 fw-bold mb-3">
              Discover Your <br/>
              <span className="text-success">
                <ReactTyped
                  strings={["Favorite Snacks..."]}
                  typeSpeed={280}
                  backSpeed={80}
                  loop
                />
              </span>
            </h1>
            <p className="lead text-muted mb-4">
              From crispy chips to sweet treats, explore our curated collection of premium snacks from around the world.
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start mb-4">
              <Button 
                variant="success" 
                size="lg" 
                className="d-flex justify-content-center align-items-center px-4 py-3 fw-semibold hero-btn"
                onClick={onOpenModal}
              >
                <span className="d-flex align-items-center gap-2">
                  Shop Now <ArrowForwardIcon />
                </span>
              </Button>
              <Button 
                variant="outline-success" 
                size="lg" 
                className="d-flex justify-content-center align-items-center px-4 py-3 fw-semibold hero-btn"
              >
                <span className="d-flex align-items-center gap-2" onClick={onOpenModal}>
                  View Categories
                </span>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="d-flex flex-wrap align-items-center gap-3 justify-content-center justify-content-lg-start hero-badges">
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
          </div>
          {/* Hero Image */}
          <div className="col-lg-6 order-1 order-lg-2 position-relative hero-image-wrapper">
            <div className="rounded-3 overflow-hidden shadow hero-image">
              <img 
                src={heroImage} 
                alt="Assorted premium snacks including chips, biscuits, and chocolate"
                className="img-fluid w-100"
              />
              <div className="position-absolute top-0 start-0 w-100 h-100 hero-overlay"></div>
            </div>

            {/* Floating Badge */}
            <div className="position-absolute bottom-0 start-0 hero-badge">
              <div className="d-flex align-items-center gap-3 bg-light p-2 rounded-3">
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
