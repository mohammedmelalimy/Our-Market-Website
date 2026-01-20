import { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import CountdownTimer from '../../../services/Counter';
import { fetchProducts } from '../../../store/thunk/getproduct';
import styles from "../../../styles/Landing/Home.module.css";



const Specialproducts = ({ onOpenModal }) => {
  const {responsive , custombackground, detected,detectedtxt } = styles;
  const futureDate = new Date();  // Current date
  futureDate.setDate(futureDate.getDate() + 1452);
  
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items); 
  const specialproducts = products.slice(0,3);

  useEffect(() => {
  dispatch(fetchProducts());
}, [dispatch]);
  return (
        <div className="container mt-5">

          <h5 className="mb-5 fs-1 fw-bolder">Daily Best Sells</h5>

          <div className="gap-3" style={{ display: 'flex', flexWrap: 'wrap' }}>

            <div className={`${responsive} ${custombackground}`} style={{ width: '26%', minWidth: '100px' }}>
                <h3 className="text-white mx-3 mt-5">100% Organic Coffee Beans.</h3>
                <p className="text-white mx-3">Get the best deal before close.</p>
                <Button className="text-white w-50 mx-3" onClick={onOpenModal} variant="success">Shop Now</Button>
            </div>
            
            {specialproducts.map((product) => (
              
              <div key={product.id} className={`${responsive} ${detected} align-items-center`} style={{ width: '23%', minWidth: '100px' }}>
                
                <img src={product.images} className="w-75"/>

                <h6 className={detectedtxt}>{product.name}</h6>
                
                <p>{product.description}</p>
                
                <Button variant="success" className='w-75 mb-3 fw-bold' onClick={onOpenModal}>+Add to Cart</Button>
                
                <div>
                  <p className="text-danger fw-bold">{product.price} $</p>
                </div>
                
                <div className="w-75">
                  <div><CountdownTimer targetDate={futureDate} /></div>
                </div>
              
              </div>
              ))}
          </div>
        </div>
  )
}

export default Specialproducts
