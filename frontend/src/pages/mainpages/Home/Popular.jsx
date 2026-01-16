import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import GrowExample from "../../../services/Spinner";
import { fetchProducts } from "../../../store/thunk/getproduct";
import styles from "../../../styles/Landing/Home.module.css";

const { popdetected } = styles;

const Popular = () => {
  // Modal state
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => setShowModal(true);

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
      <h3 className="mt-5 mb-4">Popular Products</h3>

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
                  onClick={handleShowModal}
                >
                  +Add
                </Button>
              </div>
            </div>
          ))
        ) : (
          <GrowExample />
        )}
      </div>

      {products.length > 0 && (
        <div className="text-center mt-3">
          <Button
            variant="dark"
            onClick={() =>
              showMore === 6 ? setShowMore(products.length) : setShowMore(6)
            }
          >
            {showMore === 6 ? "Show More" : "Show Less"}
          </Button>
        </div>
      )}
    </div>
  );
};

export default Popular;
