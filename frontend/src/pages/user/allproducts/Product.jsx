import { Col, Container, Row } from "react-bootstrap"
import Cards from "./Card"
import FilterSidebar from "../../../components/public/Sidebar/Sidebar"


const Product = () => {

  return (
    <div className='w-100 mt-4'>
        <Container fluid>
            <Row>
                <Col xl={2} className='mb-5' >
                    <FilterSidebar/>
                </Col>
                <Col xl={10}>
                    <Row>
                        <Cards/>
                    </Row>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Product
