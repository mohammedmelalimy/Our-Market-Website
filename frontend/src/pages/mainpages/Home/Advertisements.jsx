import { Button } from "react-bootstrap";
import styles from "../../../styles/Landing/Home.module.css";

const { advertise, banner1, banner2 } = styles;

const Advertisements = ({ onOpenModal }) => {
  return (
    <div className="container mt-5 d-flex flex-wrap p-0">

      <div className={`${advertise} ${banner1} mx-auto colorbg rounded-3 p-4`}>
        <h3 className="fw-bold">Fruits & Vegetables</h3>
        <p>Get Upto 30% Off</p>
        <Button variant="dark" onClick={onOpenModal}>Shop Now</Button>
      </div>
      <div className={`${advertise} ${banner2} mx-auto colorbg rounded-3 p-4`}>
        <h3 className="fw-bold">Freshly Baked Buns</h3>
        <p>Get Upto 25% Off</p>
        <Button variant="dark" onClick={onOpenModal}>Shop Now</Button>
      </div>

    </div>
  );
};
export default Advertisements;
