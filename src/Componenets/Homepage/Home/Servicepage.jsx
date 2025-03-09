import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Props from '../Services/Props';

const Servicepage = () => {
  return (
    <div>
        <Container className='mt-5'>
                <Row className="justify-content-md-center">
                    <Col md lg xl="3">
                    <Props iconurl ="fa fa-3x fa-plane" title="Destination"/>
                    </Col>
                    <Col md lg xl="3">
                    <Props iconurl ="fa fa-3x fa-star" title="Quality"/>
                    </Col>
                    <Col md lg xl="3">
                    <Props iconurl ="fa fa-3x fa-cart-plus" title="Booking"/>
                    </Col>
                    <Col md lg xl="3">
                    <Props iconurl ="fa fa-3x fa-headset" title="24/7 Service"/>
                    </Col>
                </Row>
            </Container>
    </div>
  )
}

export default Servicepage
