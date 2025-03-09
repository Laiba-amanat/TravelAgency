import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Props from '../Services/Props';

const Servicepage = () => {
  return (
    <div>
      <div className=" pt-10 "
                style={{ display: 'flex', alignItems: 'center', textAlign: 'center',justifyContent:"center" }}>
                 <div style={{ marginRight: '10px', flexGrow: '0.04', width: '50px', height: '2px', backgroundColor: 'orange' }} />
                <h5 style={{ color: 'orange', margin: '0 10px', whiteSpace: 'nowrap', fontSize: '50px', fontStyle: 'ittalic' }}>Our Services</h5>
                <div style={{ marginLeft: '10px', flexGrow: '0.04', height: '2px', width: '50px', backgroundColor: 'orange' }} />
              </div>
              <h3 className='text-center mt-2 font-bold'>We provide Best Services</h3>
        <Container className='mt-5 mb-5'>
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
