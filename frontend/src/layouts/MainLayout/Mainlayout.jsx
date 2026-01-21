import Marquee from "react-fast-marquee";
import { Outlet } from "react-router-dom";
import Mainfooter from "../../components/Main/Mainfooter";
import Mainnav from "../../components/Main/Mainnav";
const Mainlayout = () => {
  return (
    <div>
      <Marquee
        gradient={false}
        speed={60}
        delay={6}
        pauseOnHover={true}
        className="bg-success text-white fw-bold fs-6 m-0 p-0"
      >
        🔥 Hot Deals on Snacks! 🍟 Fresh • Fast • Delicious • SnackZone Special Offers 🔥 
      </Marquee>
      <Mainnav/>
      <Outlet/>
      <Mainfooter/>
    </div>
  )
}

export default Mainlayout;
