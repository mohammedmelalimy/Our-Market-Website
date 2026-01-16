import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { deleteall, deletefromcart } from '../../../store/Slices/cart/CartSlice';
import styles from '../../../styles/Auth/cartnav.module.css';
import Count from '../../public/Count';
import Notification from '../../public/Notification';

// styles
const {bordered,msg,img,items,btn,msg2,name}=styles

const Cartoffcanvas = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart); 

  const total= cartItems.reduce((acc, item) =>{
    return acc + item.price * item.quantity;
  },0).toFixed(2);

  // Inside your component
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 992 });

  const offcanvasWidth = isMobile ? '100%' : isTablet ? '55%' : '35%';

  return (
    <>
      <Button onClick={handleShow} className="bg-dark text-light position-relative" variant='outline-none'>
        <ShoppingCartIcon /> 
        {cartItems.length > 0 && <Notification number={cartItems.length}/>}
      </Button>
      
      <Offcanvas show={show} onHide={handleClose} placement="end" style={{ width: offcanvasWidth }}>
        
        <Offcanvas.Header closeButton>
           {/* Title */}
            <Offcanvas.Title>
              <h3>Shop Cart</h3>
            </Offcanvas.Title>

        </Offcanvas.Header>

        <Offcanvas.Body>
            {cartItems.length > 0 ? 
              <h5 className={`${msg} ${bordered}`}>Your products added</h5>
            : 
              <h5 className={`${msg2} ${bordered}`}>Your Cart is currently empty</h5>
            }
            <div>
              {cartItems.map((item) => (
                <div key={item.id} className={`${bordered} ${items}`}>
                  {/* Image */}
                  <img src={item.images} alt={item.name} className={`${img}`} />

                  {/* Name, actions, and price */}
                  <div style={{ width: '84%' }} className="d-flex justify-content-between align-items-center">
                      
                      <div className="d-flex flex-column">
                        <h6 className={`${name}`}>{item.name}</h6>
                        <Button
                          onClick={() => dispatch(deletefromcart(item))}
                          className={`${btn}`}
                          variant="bg-none"
                        >
                          <DeleteOutlineIcon />
                          Remove
                        </Button>
                      </div>
                      
                      <div className='d-flex w-50 gap-3 justify-content-evenly'>
                        <Count num={item.quantity} id={item.id}/>
                        <div className="fw-bold text-danger">${(item.price * item.quantity).toFixed(2)}</div>
                      </div>
                  
                  </div>
                </div>
              ))}
            </div>
        </Offcanvas.Body>

              {/* btn bottom */}

        {cartItems.length>0 ? 
            <div className='d-flex gap-1 justify-content-center bg-success-subtle text-center'>
                <h6>Total Price :</h6>
                <div className='text-danger fw-bold'> {total} $</div>
            </div>
            :''}
        <div className='d-flex justify-content-between'>
            <Button variant='outline-success' className='w-25 m-4' 
                onClick={handleClose}>Close</Button>

            <Button variant='dark' className='w-25 m-4' 
                onClick={()=>dispatch(deleteall())}>Clear</Button>
        </div>
      </Offcanvas>
    </>
  );
}

export default Cartoffcanvas;
