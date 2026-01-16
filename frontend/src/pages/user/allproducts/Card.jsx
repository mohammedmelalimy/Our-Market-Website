import { useEffect } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../../store/thunk/getproduct';
import styles from '../../../styles/Auth/public.module.css';
import { addtocart } from '../../../store/Slices/cart/CartSlice';
// import FavoriteToggle from '../../../components/public/FavoriteToggle';
import { addToWishlist } from '../../../store/Slices/Wishlist/WishSlice';
import { Rating } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import productbyid from '../../../store/thunk/getSpecificproduct';
import fetchprodbycategory from '../../../store/thunk/getCategoy';
// import {fetchprodbycategory} from '../../../store/thunk/getCategoy';

const { special } = styles;

const Cards = ()=>{
    const dispatch = useDispatch()
    const products = useSelector(state => state.products.items)
    useEffect(() => {
        dispatch(fetchProducts())
        // dispatch(fetchprodbycategory('Snacks'));
    }, [dispatch])

return (
    <>
        {products.map((product) =>
            <Col key={product.id} xl={3} md={4} sm={6} xs={12}>
                <Card className={`${special} mb-4`}>
                    <Card.Img variant="top" className='w-75 mx-auto' src={product.images} />
                    <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text>
                            <Button 
                             onClick={() => {
                                dispatch(productbyid(product.id));
                                dispatch(fetchprodbycategory(product.category));
                                }}
                             variant='bg-none'
                                style={{outline:'none'}}>
                                <Link to='details' 
                                    className='text-decoration-none text-secondary my-1 fw-bold'
                                    >
                                    More Details... <ArrowForwardIcon fontSize="small"  />
                                </Link>
                            </Button>
                        </Card.Text>

                        <div className='d-flex w-100 my-3 align-items-center justify-content-between'>
                        
                            <div className='d-flex justify-content-center align-items-center'>
                                <Rating name="size-small" defaultValue={Number(product.value)} size="small" />
                                <div style={{color:'#5f6368'}}>({product.value}/5)</div>
                            </div>
                        
                            <Card.Text className='text-danger w-50 d-flex justify-content-end gap-2 align-items-center'>
                                
                                <div>{product.price} $</div>

                                <div style={{color:'#5e6368', textDecoration: 'line-through' }}>
                                    {product.discount} $
                                </div>
                            </Card.Text>
                        </div>
                        
                        <div className='d-flex justify-content-between'>
                            <Button 
                                variant="success" 
                                onClick={() => dispatch(addtocart(product))} 
                                >
                                Add to Cart
                            </Button>

                            <Button onClick={()=>dispatch(addToWishlist(product))}
                            variant='bg-none'>
                                {/* <FavoriteToggle product={product.id} /> */}
                            </Button>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        )}
    </>
)}
export default Cards;