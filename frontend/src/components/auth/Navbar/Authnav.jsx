import Container from 'react-bootstrap/Container';
import {Navbar,Badge,Nav} from 'react-bootstrap'; // , Form, Row, Col, Button, Offcanvas
import { NavLink } from 'react-router-dom';
// import SearchIcon from '@mui/icons-material/Search';
// import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Accountdrop from './Accountdrop.jsx';
import Cartoffcanvas from './Cartnav.jsx';
import Wishlistoffcanvas from './Wishlist.jsx';
import HomeIcon from '@mui/icons-material/Home';
import styles from '../../../styles/Auth/authnav.module.css'
import '../../../styles/Auth/public.module.css';
// styles
const {CustomContainer , mobile} = styles;

const Authnav = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 })
  return (
    
    <Navbar expand="lg" className="bg-dark text-light">

      <Container>

          <Navbar.Brand as={NavLink} to="/user" 
            className={`${isMobile ? 'mx-auto' : null} text-light fw-bold active`}>
              Our <Badge className='bg-success p-2'>eCoShop</Badge>
          </Navbar.Brand>
          <div className={`${CustomContainer} ${isMobile ? mobile : null}`}>            
              
              {/* <Form >
                <Row>
                  <Col xs="auto" style={{display:isMobile ? 'none': 'block'}}>
                    <Form.Control type="text" placeholder="Search for products"/>
                  </Col>
                  <Col xs="auto">
                    <Button type={isMobile? 'button' : 'submit'} variant='bg-none' 
                    onClick={isMobile? handleShow:undefined} className="text-light"><SearchIcon/></Button>
                  </Col>
                </Row>
              </Form> */}

              <Nav.Link as={NavLink} to='/user' className="border-0">
                  <HomeIcon className='fs-2'/>
              </Nav.Link>

              <Nav.Link><Wishlistoffcanvas/></Nav.Link>
              <Nav.Link><Cartoffcanvas/></Nav.Link>
              <Nav.Link><Accountdrop/></Nav.Link>

              {/* {isMobile&&(             
              <Offcanvas show={show} onHide={handleClose} placement="top">
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Form >
                    <Row>
                      <Col xs="auto" style={{display:isMobile ? 'none': 'block'}}>
                        <Form.Control type="text" placeholder="Search for products"/>
                      </Col>
                      <Col xs="auto">
                        <Button type="submit" variant='bg-none' 
                        onClick={handleShow} className="text-dark"><SearchIcon/></Button>
                      </Col>
                    </Row>
                    </Form>
                </Offcanvas.Body>
              </Offcanvas>)} */}
          </div>
      </Container>
    </Navbar>
  )
}

export default Authnav
