import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../store/thunk/getproduct";
import styles from "../../../styles/Landing/Home.module.css";
const { popdetected , viewtext} = styles;

const Popular = ({ onOpenModal }) => {
  // Show more/less state
  const [showMore, setShowMore] = useState(6);

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const visibleProducts = products.slice(0, showMore);

  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between align-items-center">
        <h3 className="mt-5 mb-4 fw-bolder fs-1">Popular Products</h3>
        {products.length > 0 && (
          <div className="text-center mt-3">
            <a
              className="text-dark fw-bold d-inline-flex align-items-center gap-2"
              style={{ textDecoration: "none", cursor: "pointer" }}
              onClick={() =>
                showMore === 6 ? setShowMore(products.length) : setShowMore(6)
              }
            >
              <span className={viewtext}>
                {showMore === 6 ? "View all Products" : "View less"}
              </span>
              {showMore === 6 ? <KeyboardDoubleArrowDownIcon /> : <KeyboardDoubleArrowUpIcon />}
            </a>
          </div>
        )}

      </div>

      <div className="row">
        {products.length > 0 ? (
          visibleProducts.map((product) => (
            <div
              key={product.id}
              className={`${popdetected} col-12 col-md-3 col-lg-2 rounded-3`}
              style={{ border: "5px solid rgb(240, 243, 242)" }}
            >
              <img src={product.images} className="w-100" />
              <h6>{product.name}</h6>
              <p>{product.description}</p>

              <div className="w-100 d-flex justify-content-between">
                <p className="text-danger fw-bold">{product.price} $</p>
                <Button
                  variant="success"
                  className="w-25 mb-3 text-center p-0"
                  onClick={onOpenModal}
                >
                  +Add
                </Button>
              </div>
            </div>
          ))
        ) : (
          <div className="spinner-border text-success mx-auto" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
      </div>


    </div>
  );
};

export default Popular;
