import { useState } from "react";
import CustomModal from "../../../components/Main/CustomModal";
import Signin from "../Signin";
import Advertisements from "./Advertisements";
import Landing from "./Landing";
import Offers from "./Offers";
import Popular from "./Popular";
import Specialproducts from "./Specialproducts";

// styles 

      
const Home = () => {

  const [showModal, setShowModal] = useState(false); // State for modal visibility
  const handleCloseModal = () => setShowModal(false); // Close modal

  const futureDate = new Date();  // Current date
  futureDate.setDate(futureDate.getDate() + 1452);
  
  return (
    <div>
        {/* part 1 */}
        <Landing/>
        {/* part 2 */}
        <Advertisements/>

        {/* part 3 */}
        <Popular/>
        {/* part 4 */}
        <Specialproducts/>

        {/* part 5 */}
        <Offers/>
        
        <CustomModal show={showModal}
          handleClose={handleCloseModal}
          title="Sign In"
        >
            <Signin /> 
        </CustomModal>   
    </div>
  )
}

export default Home
