import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import styles from '../../../styles/Auth/cartnav.module.css';
import {useDispatch , useSelector} from 'react-redux';
import { clear, removeFromWishlist } from '../../../store/Slices/Wishlist/WishSlice';
const {msg , bordered , msg2 ,items} = styles;
import Notification from '../../public/Notification';
import ClearIcon from '@mui/icons-material/Clear';

const Wishlistoffcanvas = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  const WishlistItems = useSelector(state => state.wishlist); 

  return (
    <>
      <Button onClick={handleShow} className="bg-dark text-light position-relative" variant='outline-none'>
        <FavoriteBorderIcon />
        {WishlistItems.length > 0 && <Notification number={WishlistItems.length}/>}
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <h3>WishList</h3>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='text-center'>
          {WishlistItems.length > 0 ? 
                <h5 className={`${msg} mb-4`}>Your products added</h5>
              : 
                <h5 className={`${msg2}`}>Your Wishlist is currently empty</h5>
          }
          <div>
            {WishlistItems.map((item)=>(
              <div key={item.id} className={`${items} ${bordered}`}>
                <img src={item.images} alt={item.name} className='w-25' />
                <div className='d-flex flex-column'>
                  <h6>{item.name}</h6>
                  <h6 className='text-danger fs-6'>{item.price}$</h6>
                </div>
                <Button variant='bg-none' className='fs-4'
                onClick={()=>dispatch(removeFromWishlist(item))}><ClearIcon/></Button>
              </div>    
            ))}
          </div>
        </Offcanvas.Body>
        <div className='d-flex justify-content-between'>
            <Button variant='outline-success' className='w-25 m-4' 
                onClick={handleClose}>Close</Button>

            <Button variant='dark' className='w-25 m-4' 
                onClick={()=>dispatch(clear())}>Clear</Button>
        </div>
      </Offcanvas>
    </>
  );
}

export default Wishlistoffcanvas;
