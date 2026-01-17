import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Rating } from "@mui/material";
import { useCallback, useEffect } from "react";
import { Button, Card, Col, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addtocart } from "../../../store/Slices/cart/CartSlice";
import { addToWishlist } from "../../../store/Slices/Wishlist/WishSlice";
import fetchprodbycategory from "../../../store/thunk/getCategoy";
import { fetchProducts } from "../../../store/thunk/getproduct";
import productbyid from "../../../store/thunk/getSpecificproduct";
import styles from "../../../styles/Auth/public.module.css";
const { special } = styles;

const Cards = () => {
  const dispatch = useDispatch();

  const { items: products, loading, error } = useSelector((state) => state.products);

  // Fetch products only once
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Better handler for fetching details
  const handleDetails = useCallback(
    (product) => {
      dispatch(productbyid(product.id));
      dispatch(fetchprodbycategory(product.category));
    },
    [dispatch]
  );

  // Handle loading
  if (loading) {
    return (
      <div className="text-center my-5">
        <Spinner animation="border" />
      </div>
    );
  }

  // Handle API error
  if (error) {
    return (
      <div className="text-danger text-center my-5">
        Failed to load products. Please try again later.
      </div>
    );
  }

  // Handle empty list
  if (!products?.length) {
    return <div className="text-center my-3">No products found</div>;
  }

  return (
    <>
      {products.map((product) => (
        <Col key={product.id} xl={3} md={4} sm={6} xs={12} className="mb-4">
          <Card className={special}>
            <Card.Img
              variant="top"
              className="w-75 mx-auto"
              src={product.images}
              alt={product.name}
            />

            <Card.Body>
              <Card.Title>{product.name}</Card.Title>

              <Button
                variant="link"
                className="p-0 text-decoration-none"
                onClick={() => handleDetails(product)}
              >
                <Link className="text-decoration-none fw-bold text-secondary" to="details">
                  More Details... <ArrowForwardIcon fontSize="small" />
                </Link>
              </Button>

              <div className="d-flex align-items-center justify-content-between my-3">
                <div className="d-flex align-items-center">
                  <Rating
                    name="rating"
                    defaultValue={Number(product.value)}
                    size="small"
                    readOnly
                  />
                  <span className="ms-1 text-muted">({product.value}/5)</span>
                </div>

                <div className="text-danger fw-semibold">
                  {product.price} $
                  <span
                    className="text-muted ms-2"
                    style={{ textDecoration: "line-through" }}
                  >
                    {product.discount} $
                  </span>
                </div>
              </div>

              <div className="d-flex justify-content-between">
                <Button
                  variant="success"
                  onClick={() => dispatch(addtocart(product))}
                >
                  Add to Cart
                </Button>
                <Button
                  variant="outline-none"
                  onClick={() => dispatch(addToWishlist(product))}
                >
                  <FavoriteBorderIcon fontSize="small" />
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default Cards;
