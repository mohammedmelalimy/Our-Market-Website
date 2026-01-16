import { Dropdown } from "react-bootstrap";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from "react-router-dom";
import styles from '../../../styles/Auth/Account.module.css';

const { accountStyle ,customdropdown} = styles;

const Accountdrop = () => {
  const navigate = useNavigate();

  return (
    <Dropdown align="end" placement="bottom-end">
      <Dropdown.Toggle 
        variant='none' 
        className={`text-light ${accountStyle} ${customdropdown}`} 
        id="dropdown-basic"
      >
        <AccountCircleIcon />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item as="button" onClick={() => navigate("profile")} className={`${accountStyle}`}>
          Profile
        </Dropdown.Item>
        <Dropdown.Item as="button" onClick={() => navigate("orders")} className={`${accountStyle}`}>
          Orders
        </Dropdown.Item>
        <Dropdown.Item as="button" onClick={() => navigate("/")} className={`${accountStyle}`}>
          Log out
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Accountdrop;
