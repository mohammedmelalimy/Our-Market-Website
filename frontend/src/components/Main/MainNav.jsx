import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { Badge, Button, Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';
import { NavLink } from 'react-router-dom';
import Signin from '../../pages/mainpages/Signin'; // Import Signin component
import CustomModal from './CustomModal'; // Import CustomModal component

const MainNav = () => {
    const [show, setShow] = useState(false);
    const [showModal, setShowModal] = useState(false); // State for modal visibility

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleShowModal = () => setShowModal(true); // Open modal
    const handleCloseModal = () => setShowModal(false); // Close modal

    const isMobile = useMediaQuery({ maxWidth: 767 });

    return (
        <div>
            <Navbar className="bg-light sticky-top" data-bs-theme="light"
              style={{ boxShadow: '2px 3px 1px rgba(0, 0, 0, 0.1)' }}>
                <Container>
                    <Navbar.Brand as={NavLink} to="/" className='text-dark fw-bold active'>
                        Our <Badge className='bg-success p-2'>Market</Badge>
                    </Navbar.Brand>
                    {!isMobile && (
                        <>
                            <Nav className='d-flex justify-content-evenly' style={{ width: '28%' }}>
                                <Nav.Link as={NavLink} to="/" className={({ isActive }) => (isActive ? "active text-dark" : "text-dark")}>
                                    Home
                                </Nav.Link>
                                <Nav.Link as={NavLink} to="features" className={({ isActive }) => (isActive ? "active text-dark" : "text-dark")}>
                                    Features
                                </Nav.Link>
                                <Nav.Link as={NavLink} to="about-us" className={({ isActive }) => (isActive ? "active text-dark" : "text-dark")}>
                                    About
                                </Nav.Link>
                                <Nav.Link as={NavLink} to="contact" className={({ isActive }) => (isActive ? "active text-dark" : "text-dark")}>
                                    Contact
                                </Nav.Link>
                            </Nav>

                            <div className="d-flex">
                                <Button onClick={handleShowModal} variant='outline-success' className='me-2 fw-bold'>
                                    Sign in
                                </Button>
                                <Button as={NavLink} to="signup" variant='success' className='fw-bold'>
                                    Sign up
                                </Button>
                            </div>
                        </>
                    )}
                    {isMobile && (
                        <div onClick={handleShow} style={{ cursor: 'pointer' }}>
                            <MenuIcon fontSize="large" />
                        </div>
                    )}
                    <Offcanvas show={show} onHide={handleClose}>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Offcanvas Menu</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className='flex-column'>
                                <Nav.Link as={NavLink} to="/" onClick={handleClose} className='fw-bold'>Home</Nav.Link>
                                <Nav.Link as={NavLink} to="features" onClick={handleClose} className='fw-bold'>Features</Nav.Link>
                                <Nav.Link as={NavLink} to="about-us" onClick={handleClose} className='fw-bold'>About</Nav.Link>
                                <Nav.Link as={NavLink} to="contact" onClick={handleClose} className='fw-bold'>Contact</Nav.Link>
                                <div className="d-flex flex-column mt-3">
                                    <Button onClick={handleShowModal} variant='outline-success' className='mb-2'>
                                        Sign in
                                    </Button>
                                    <Button variant='success'>
                                        <Nav.Link to="signup" onClick={handleClose} className='fw-bold'>Sign up</Nav.Link>
                                    </Button>
                                </div>
                            </Nav>
                        </Offcanvas.Body>
                    </Offcanvas>
                </Container>
            </Navbar>

            {/* Sign In Modal */}
            <CustomModal
                show={showModal}
                handleClose={handleCloseModal}
                title="Sign In"
            >
                <Signin /> 
            </CustomModal>
        </div>
    );
};

export default MainNav;
