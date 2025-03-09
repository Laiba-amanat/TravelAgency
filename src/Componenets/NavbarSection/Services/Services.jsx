
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Props from './Props';
import 'animate.css';

const services = () => {
  return (
    <div>

      <div className="relative ">
        {/* Background Image */}
        <img
          src="/images/img1.jpg"
          alt="Background"
          style={{ height: '400px', width: '100%' }}
          className="object-cover"
        />

       
        
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-black">
          <h1 className="animate__animated animate__fadeInDown" style={{ fontSize: '60px', color: 'black', fontWeight: 'bold' }}>
            Services
          </h1>
          <h1 style={{ fontSize: '25px', color: 'black', fontWeight: 'bold' }} className="mt-2 text-center">Traveling opens the door to creating memories</h1>
  <p className='w-[700px] mt-3 lg:block hidden text-center' style={{fontSize:'15px', fontWeight:600,}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam ipsum nobis asperiores soluta voluptas quas voluptates. Molestiae tempora dignissimos, animi praesentium molestias perferendis porro expedita delectus. Soluta natus porro.</p>
  <p className='block lg:hidden mt-3 text-center' style={{fontSize:'15px', fontWeight:600,}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam ipsum nobis asperiores soluta voluptas quas voluptates. Molestiae tempora dignissimos, animi praesentium molestias perferendis porro expedita delectus. </p>

        
        </div>
      </div>
    
      <div className=''>   
     <div className=" pt-10 "
                style={{ display: 'flex', alignItems: 'center', textAlign: 'center',justifyContent:"center" }}>
                 <div style={{ marginRight: '10px', flexGrow: '0.04', width: '50px', height: '2px', backgroundColor: 'orange' }} />
                <h5 style={{ color: 'orange', margin: '0 10px', whiteSpace: 'nowrap', fontSize: '50px', fontStyle: 'oblique' }}>Services</h5>
                <div style={{ marginLeft: '10px', flexGrow: '0.04', height: '2px', width: '50px', backgroundColor: 'orange' }} />
              </div>
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
           
    </div>
  )
}

export default services
