import { Badge, Button, Navbar } from "react-bootstrap"
import { Link, NavLink } from "react-router-dom"
import error from '../../assets/error.svg'

const Error = () => {
  return (
    <div className="container" style={{ marginTop: '10%' }}>
      <div className="row">
        {/* text */}
        <div className="col-12 col-lg-6">
          <div style={{ marginBottom: '70px' }}>
            <Navbar.Brand as={NavLink} to="/" className="text-dark fw-bold p-3" style={{ borderBottom: '2px solid green' }}>
              <span className="fs-4">Our</span> <Badge className="bg-success fw-bolder fs-6 p-2">eCoShop</Badge>
            </Navbar.Brand>
          </div>
          <div>
            <h1>Something’s wrong here...</h1>
            <p>We can’t find the page you’re looking for. Check out our help center or head back to home.</p>
            <div className="w-50 d-flex flex-column flex-lg-row">
              <Button variant=" bg-dark" className="me-md-3 mb-3 mb-md-0">
                <Link to='/' className="text-decoration-none text-white">Help Center</Link>
              </Button>
              <Button variant="outline-none bg-success info">
                <Link className="text-decoration-none text-white fw-bold">Back to home</Link>
              </Button>
            </div>
          </div>
        </div>
        {/* image */}
        <div className="col-12 col-md-6">
          <img src={error} alt="Error" className="img-fluid" />
        </div>
      </div>
    </div>
  )
}

export default Error