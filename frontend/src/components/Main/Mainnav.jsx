import MenuIcon from '@mui/icons-material/Menu';
import { useState, useEffect } from 'react';
import { Badge, Button, Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';
import { NavLink } from 'react-router-dom';
import Signin from '../../pages/mainpages/Signin'; 
import CustomModal from './CustomModal'; 
import '../../styles/Landing/Nav.module.css';

const Mainnav = () => {
    const [show, setShow] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const isMobile = useMediaQuery({ maxWidth: 767 });

    // Scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div>
            <Navbar
                className={`sticky-top py-2 fs-5 navbar-transparent ${scrolled ? 'scrolled' : ''}`}
                data-bs-theme="light" style={{borderBottom:'1px solid rgb(187, 187, 187)'}}
            >
                <Container>
                    <Navbar.Brand as={NavLink} to="/" className='text-dark active' style={{fontWeight:'800'}}>
                        Our <Badge className='bg-success fw-bold fs-4'>Market</Badge>
                    </Navbar.Brand>
                    {!isMobile && (
                        <>
                            <Nav className='d-flex justify-content-between' style={{ width: '35%', fontWeight: '700' }}>
                                <Nav.Link as={NavLink} to="/" className={({ isActive }) => (isActive ? "active text-dark" : "text-dark")}>Home</Nav.Link>
                                <Nav.Link as={NavLink} to="features" className={({ isActive }) => (isActive ? "active text-dark" : "text-dark")}>Features</Nav.Link>
                                <Nav.Link as={NavLink} to="about-us" className={({ isActive }) => (isActive ? "active text-dark" : "text-dark")}>About</Nav.Link>
                                <Nav.Link as={NavLink} to="contact" className={({ isActive }) => (isActive ? "active text-dark" : "text-dark")}>Contact</Nav.Link>
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

                    <Offcanvas show={show} onHide={handleClose} placement="end">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Menu</Offcanvas.Title>
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
                                        <Nav.Link to="signup" onClick={handleClose} className='fw-bold text-white'>Sign up</Nav.Link>
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
export default Mainnav;