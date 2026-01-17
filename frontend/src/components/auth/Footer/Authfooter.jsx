import CopyrightIcon from "@mui/icons-material/Copyright";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import { Col, Container, Row } from "react-bootstrap";

const Authfooter = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light pt-5 pb-3 border-top border-secondary">
      <Container>
        <Row className="mb-4">

          {/* Brand Section */}
          <Col md={3} className="mb-3 mb-md-0">
            <h4 className="fw-bold text-light">
              Our <span className="text-success">Market</span>
            </h4>
            <p className="text-secondary small">
              Your go-to place for premium products and curated picks, all in one place.
            </p>
          </Col>

          {/* Brand Loyalty Section */}
          <Col md={3} className="mb-3 mb-md-0">
            <h6 className="text-uppercase text-secondary fw-bold mb-3">
              Join the Club
            </h6>
            <ul className="list-unstyled small">
              <li className="mb-2">Become a Member</li>
              <li className="mb-2">Rewards Program</li>
              <li className="mb-2">Refer & Earn</li>
              <li className="mb-2">Insider Discounts</li>
            </ul>
          </Col>

          {/* Featured Picks Section */}
          <Col md={3} className="mb-3 mb-md-0">
            <h6 className="text-uppercase text-secondary fw-bold mb-3">
              Featured Picks
            </h6>
            <ul className="list-unstyled small">
              <li className="mb-2">Editor’s Picks</li>
              <li className="mb-2">Trending Now</li>
              <li className="mb-2">Best Gifts</li>
              <li className="mb-2">Premium Collection</li>
            </ul>
          </Col>

          {/* Our Promise Section */}
          <Col md={3} className="mb-3 mb-md-0">
            <h6 className="text-uppercase text-secondary fw-bold mb-3">
              Our Promise
            </h6>
            <ul className="list-unstyled small">
              <li className="mb-2">Quality You Can Trust</li>
              <li className="mb-2">Fast & Secure Delivery</li>
              <li className="mb-2">24/7 Customer Support</li>
              <li className="mb-2">Easy Returns</li>
            </ul>
          </Col>

        </Row>

        {/* Social Icons */}
        <div className="d-flex justify-content-center gap-3 mb-3">
          <a href="#" className="text-light fs-5"><InstagramIcon /></a>
          <a href="#" className="text-light fs-5"><FacebookIcon /></a>
          <a href="#" className="text-light fs-5"><XIcon /></a>
        </div>

        {/* Bottom Strip */}
        <div className="text-center text-secondary small">
          <CopyrightIcon fontSize="small" className="me-1" />
          {year} Mohammed Elalimy — All Rights Reserved
        </div>
      </Container>
    </footer>
  );
};

export default Authfooter;
