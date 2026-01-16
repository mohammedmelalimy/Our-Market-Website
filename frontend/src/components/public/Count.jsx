import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import { decreaseQuantity, increaseQuantity } from '../../store/Slices/cart/CartSlice';

const Count = ({ num, id }) => {
  const dispatch = useDispatch();

  const increaseHandler = () => dispatch(increaseQuantity(id));
  const decreaseHandler = () => dispatch(decreaseQuantity(id));

  return (
    <div className="d-flex align-items-center gap-2">
      <Button onClick={decreaseHandler} variant="outline-secondary" size="sm">-</Button>
      <h6>{num}</h6>
      <Button onClick={increaseHandler} variant="outline-secondary" size="sm">+</Button>
    </div>
  );
}

export default Count;
