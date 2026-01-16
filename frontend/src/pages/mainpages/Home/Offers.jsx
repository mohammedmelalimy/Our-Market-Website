import img1 from "../../../assets/clock.svg";
import img2 from "../../../assets/gift.svg";
import img3 from "../../../assets/package.svg";
import img4 from "../../../assets/refresh-cw.svg";
const Offers = () => {
  return (
            <div className='container mx-auto p-0 mt-5 mb-5'>
          <div className='row mx-auto'>

            <div className='col-12 col-md-3  p-3 d-flex flex-column'>
              <img src={img1} alt='img-1' style={{width:'15%'}} className="mb-3"/>
              <h5>10 minute grocery now</h5>
              <p>Get your order delivered to your doorstep at the earliest from FreshCart pickup stores near you.</p>
            </div>

            <div className='col-12 col-md-3  p-3 d-flex flex-column'>
              <img src={img2} alt='img-2' style={{width:'15%'}} className="mb-3"/>
              <h5>Best Prices & Offers</h5>
              <p>Cheaper prices than your local supermarket, great cashback offers to top it off. Get best pricess & offers.</p>
            </div>

            <div className='col-12 col-md-3  p-3 d-flex flex-column'>
              <img src={img3} alt='img-3' style={{width:'15%'}} className="mb-3"/>
              <h5>Wide Assortment</h5>
              <p>Choose from 5000+ products across food, personal care, household, bakery, veg and non-veg & other categories.</p>
            </div>

            <div className='col-12 col-md-3  p-3 d-flex flex-column'>
              <img src={img4} alt='img-4' style={{width:'15%'}} className="mb-3"/>
              <h5>Easy Returns</h5>
              <p>Not satisfied with a product? Return it at the doorstep & get a refund within hours. No questions asked policy .</p>
            </div>

          </div>  
        </div>   
  )
}

export default Offers
