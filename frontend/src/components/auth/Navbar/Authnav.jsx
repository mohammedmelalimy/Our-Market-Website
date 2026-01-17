import { Badge, Nav, Navbar } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { useMediaQuery } from "react-responsive";
import { NavLink } from "react-router-dom";

import Accountdrop from "./Accountdrop.jsx";
import Cartoffcanvas from "./Cartnav.jsx";
import Wishlistoffcanvas from "./Wishlist.jsx";

import HomeIcon from "@mui/icons-material/Home";

import styles from "../../../styles/Auth/authnav.module.css";
import "../../../styles/Auth/public.module.css";

const { CustomContainer, mobile } = styles;

const Authnav = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <Navbar expand="lg" className="bg-dark text-light py-2 shadow-sm">
      <Container>

        {/* Brand */}
        <Navbar.Brand
          as={NavLink}
          to="/user"
          className={`text-light fw-bold ${isMobile ? "mx-auto" : ""}`}
        >
          Our <Badge bg="success" className="px-2 py-1">Market</Badge>
        </Navbar.Brand>

        {/* Right Section */}
        <div className={`${CustomContainer} ${isMobile ? mobile : ""} d-flex align-items-center gap-3`}>

          {/* Home */}
          <Nav.Link as={NavLink} to="/user" className="p-0 text-light">
            <HomeIcon className="fs-2" />
          </Nav.Link>

          {/* Wishlist */}
          <Nav.Link className="p-0">
            <Wishlistoffcanvas />
          </Nav.Link>

          {/* Cart */}
          <Nav.Link className="p-0">
            <Cartoffcanvas />
          </Nav.Link>

          {/* Account Dropdown */}
          <Nav.Link className="p-0">
            <Accountdrop />
          </Nav.Link>
        </div>

      </Container>
    </Navbar>
  );
};

export default Authnav;
