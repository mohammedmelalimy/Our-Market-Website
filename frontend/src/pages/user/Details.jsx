import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Rating } from '@mui/material';
import styles from '../../styles/Auth/details.module.css'; 
import { addtocart } from '../../store/Slices/cart/CartSlice';
import { Link } from 'react-router-dom';


const {part1,part2,part3} = styles
const Details = () => {
    const dispatch = useDispatch();
    const product  = useSelector((state) => state.specific);
    const similar = useSelector((state) => state.products.items)
    return (
      <>
        {product ? 
        <Container>
            <Row className=' justify-content-center align-items-center'>
                <Col lg={3} xs={12} className='p-0'>
                    {product.images && <img src={product.images} alt={product.name} 
                    style={{ width: '100%', height: 'auto' }} />}
                </Col>
                <Col lg={6} xs={12} className='p-0'>

                <div className={`${part1}`}>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <div className='d-flex my-2 align-items-center'>
                      <Rating 
                        name="size-small" 
                        value={Number(product.value)} // Use 'value' instead of 'defaultValue'
                        size="small" 
                        readOnly // Make it read-only if you don't want the user to change the rating
                      />
                      <div style={{ color: '#5f6368' }}>({product.value}/5)</div>
                    </div>
                    <h5 className='d-flex gap-2'>Price: 
                      <span className='text-success'>{product.price}$</span>
                      <span className='text-secondary' style={{ textDecoration: 'line-through' }}>{product.discount} $</span>
                    </h5>
                </div>

                    <div className={`${part3}`}>
                      <h6>Product Code : <span className='text-secondary'>{product.code}</span></h6>
                      <h6>Availability:  <span className='text-secondary'>{product.availability}</span></h6>
                      <h6>Shipping:  <span className='text-secondary'>{product.shipping}</span></h6>
                    </div>

                    <div className={`${part2}`}>
                        <button className='btn btn-success w-25 p-1' onClick={()=>dispatch(addtocart(product))}>
                          Add+
                        </button>

                        <Button variant='outline-dark w-25 p-0'>
                          <Link to='/user' className='text-decoration-none text-success'>Back</Link>
                        </Button>
                    </div>
                    
                
                </Col>
            </Row>
            <h3 className='mt-4'>Similar Products</h3>
            <Row>
              <Col className='text-center d-flex gap-3 p-0 justify-content-center my-3'>
                {/* similar product component */}
                {similar.map((s)=>
                  <Card style={{ width: '16rem' }} key={s.id}>
                      <Card.Img variant="top" src={s.images} />
                      <Card.Body>
                        <Card.Title>{s.name}</Card.Title>
                        <Card.Text>{s.description}</Card.Text>
                        <Button variant="success">Add to cart</Button>
                      </Card.Body>
                  </Card>
                )}
              </Col>
            </Row>
        </Container>
        :
        <h1 className='w-100 text-center text-danger fw-bolder p-5'>No Product Selected</h1>
        }
      </>
    );
};

export default Details;
