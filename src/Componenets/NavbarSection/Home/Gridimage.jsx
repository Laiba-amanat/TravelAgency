import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Gridimage = () => {
    return (
        <div>
             <div className=" pt-10 "
                style={{ display: 'flex', alignItems: 'center', textAlign: 'center',justifyContent:"center" }}>
                 <div style={{ marginRight: '10px', flexGrow: '0.04', width: '50px', height: '2px', backgroundColor: 'orange' }} />
                <h5 style={{ color: 'orange', margin: '0 10px', whiteSpace: 'nowrap', fontSize: '50px', fontStyle: 'ittalic' }}>World Tour</h5>
                <div style={{ marginLeft: '10px', flexGrow: '0.04', height: '2px', width: '50px', backgroundColor: 'orange' }} />
              </div>
              <h3 className='text-center mt-2 font-bold'>Create Lifelong Memories</h3>
          <Container className="mt-5 mb-5">
  <Row className="justify-content-md-center">
    <Col md={6} lg={3} className="d-flex justify-content-center">
      <div
        className="w-[200px] h-[280px] rounded-[100px] overflow-hidden bg-center bg-cover"
        style={{ backgroundImage: "url('/images/dubai1.jpg')" }}
      ></div>
    </Col>
    <Col md={6} lg={3} className="pt-20  d-flex flex-column align-items-center text-center">
      <h2>Dubaii</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, eos animi neque molestias</p>
    </Col>
    <Col md={6} lg={3} className="d-flex justify-content-center">
      <div
        className="w-[200px] h-[280px] rounded-[100px] overflow-hidden bg-center bg-cover"
        style={{ backgroundImage: "url('/images/france.jpg')" }}
      ></div>
    </Col>
    <Col md={6} lg={3} className="pt-20 d-flex flex-column align-items-center text-center">
      <h2>Paris, France</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, eos animi neque molestias</p>
    </Col>
  </Row>
</Container>

        </div>
    )
}

export default Gridimage
