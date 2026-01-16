// import { Button } from 'react-bootstrap';
import './Sidebar.module.css';
import { useDispatch, useSelector } from 'react-redux';
import fetchprodbycategory from '../../../store/thunk/getCategoy';
import { fetchProducts } from '../../../store/thunk/getproduct';
import { filter100to120, filter50to100, filterHigher120, filterLess50 } from '../../../store/Slices/products/ProductSlice';

const FilterSidebar = () => {
  const dispatch = useDispatch();
  const current = useSelector(state=>state.products.items)
  return (
    <div className="filter-sidebar">
      <h3>Filter Products</h3>
      
      {/* Category Filter */}
      <div className="filter-section mt-3">
        <h4>Category</h4>
        <div className="radio-group d-flex flex-column gap-2">
            <label>
                <input 
                type="radio" 
                name="category" 
                value="All" 
                className="me-2"
                onChange={()=>dispatch(fetchProducts())} />
                All
            </label>
            <label>
                <input 
                type="radio" 
                name="category" 
                value="Snacks" 
                className="me-2"
                onChange={()=>dispatch(fetchprodbycategory("Snacks"))} />
                Snacks
            </label>
            <label>
                <input 
                type="radio" 
                name="category" 
                value="Biscuits" 
                className="me-2"
                onChange={()=>dispatch(fetchprodbycategory("Biscuits"))} />
                Biscuits
            </label>
            <label>
                <input 
                type="radio" 
                name="category" 
                value="Dairy Products" 
                className="me-2" 
                onChange={()=>dispatch(fetchprodbycategory("Dairy Products"))} />
                Dairy Products
            </label>
            <label>
                <input 
                type="radio" 
                name="category" 
                value="Cereals" 
                className="me-2" 
                onChange={()=>dispatch(fetchprodbycategory("Cereals"))} />
                Cereals
            </label>
            </div>
        </div>

      {/* Price Filter */}
      <div className="filter-section mt-3">
        <h4>Price Range</h4>
        <div className="radio-group d-flex flex-column gap-2">
          <label>
            <input 
            type="radio" 
            name="price" 
            value="less_than_50" 
            className='me-2' 
            onChange={()=>dispatch(filterLess50(current))}  
            />
            Less than $50
          </label>
          <label>
            <input 
            type="radio" 
            name="price" 
            value="50_to_100" 
            className='me-2'
            onChange={()=>dispatch(filter50to100(current))}
            />
            $50 to $100
          </label>
          <label>
            <input 
            type="radio" 
            name="price" 
            value="80_to_120" 
            className='me-2'
            onChange={()=>dispatch(filter100to120(current))}
            />
            $100 to $120
          </label>
          <label>
            <input 
            type="radio" 
            name="price" 
            value="higher_than_120" 
            className='me-2'
            onChange={()=>dispatch(filterHigher120(current))}  
            />
            Higher than $120
          </label>
        </div>
      </div>

      {/* Filter Button */}
      {/* <Button variant="success" className='my-3'>Apply</Button> */}
    </div>
  );
};

export default FilterSidebar;
