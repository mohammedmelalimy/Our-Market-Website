import { Facebook, Instagram, Twitter } from '@mui/icons-material';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Mainfooter = () => {

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer 
      className="py-4 bg-dark text-white" 
      style={{ borderTop: '1px solid #dee2e6' }}
    >
      <Container>

        {/* ======= Links Section ======= */}
        <Row className="align-items-center text-center text-md-start">
          
          {/* Company Links */}
          <Col md={4} className="mb-3 mb-md-0">
            <h5 className="fw-bold">Our Company</h5>
            <ul className="list-unstyled">
              <li>
                <Link 
                  to="/about-us" 
                  className="text-white text-decoration-none"
                  onClick={scrollToTop}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/features" 
                  className="text-white text-decoration-none"
                  onClick={scrollToTop}
                >
                  Features
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-white text-decoration-none"
                  onClick={scrollToTop}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </Col>

          {/* Social Icons */}
          <Col md={4} className="mb-3 mb-md-0 text-center">
            <h5 className="fw-bold">Stay Connected</h5>
            <div className="d-flex justify-content-center">
              <a 
                href="https://facebook.com" 
                className="me-3 text-white" 
                aria-label="Facebook"
                style={{ fontSize: "24px" }}
              >
                <Facebook />
              </a>

              <a 
                href="https://twitter.com" 
                className="me-3 text-white" 
                aria-label="Twitter"
                style={{ fontSize: "24px" }}
              >
                <Twitter />
              </a>

              <a 
                href="https://instagram.com" 
                className="text-white" 
                aria-label="Instagram"
                style={{ fontSize: "24px" }}
              >
                <Instagram />
              </a>
            </div>
          </Col>

          {/* Contact Info */}
          <Col md={4} className="text-md-end text-center">
            <h5 className="fw-bold">Contact Us</h5>

            <p className="mb-1">22 Moheb St, Tanta, Egypt</p>

            <p className="mb-1"> 
              <a 
                href="mailto:mohammed.m.elalimy@gmail.com" 
                className="text-white text-decoration-none"
              >
                mohammed.m.elalimy@gmail.com
              </a>
            </p>

            <p className="mb-0">
              Phone: 
              <a 
                href="tel:+201113414805" 
                className="text-white text-decoration-none"
              >
                (+20) 111 3414 805
              </a>
            </p>
          </Col>

        </Row>

        {/* ======= Footer Bottom ======= */}
        <Row>
          <Col className="text-center mt-3">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} Mohammed Elalimy. All rights reserved.
            </p>
          </Col>
        </Row>

      </Container>
      
    </footer>
  );
};

export default Mainfooter;
