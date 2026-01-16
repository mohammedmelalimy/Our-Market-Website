import { Outlet } from "react-router-dom"
import Authnav from "../../components/auth/Navbar/Authnav"
import Authfooter from "../../components/auth/Footer/Authfooter"

const Authlayout = () => {
  return (
    <div className="d-flex flex-column justify-content-between vh-100">
      <Authnav/>
      <Outlet/>
      <Authfooter/>
    </div>
    )}
export default Authlayout
