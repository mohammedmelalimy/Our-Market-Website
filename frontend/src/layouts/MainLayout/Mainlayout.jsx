import { Outlet } from "react-router-dom";
import Mainfooter from "../../components/Main/Mainfooter";
import Mainnav from "../../components/Main/Mainnav";
const Mainlayout = () => {
  return (
    <div className="d-flex flex-column justify-content-between vh-100">
      <Mainnav/>
      <Outlet/>
      <Mainfooter/>
    </div>
  )
}

export default Mainlayout;
