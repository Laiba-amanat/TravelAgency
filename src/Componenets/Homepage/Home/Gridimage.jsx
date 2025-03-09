import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Gridimage = () => {
    return (
        <div>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-20 my-10">
                <Col
                    className="w-[200px] h-[280px]  rounded-[100px] overflow-hidden bg-center bg-cover"
                    style={{ backgroundImage: "url('/images/dubai1.jpg')" }}
                >
                </Col>
                <Col className="w-[200px] h-[280px] py-20" >
                <h2>Dubaii</h2> 
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, eos animi neque molestias </p>
                </Col>
                <Col
                    className="w-[200px] h-[280px]  rounded-[100px] overflow-hidden bg-center bg-cover"
                    style={{ backgroundImage: "url('/images/france.jpg')" }}
                >
                </Col>
                <Col className="w-[200px] h-[280px] py-20" >
                <h2>Paris, France</h2> 
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, eos animi neque molestias </p>
                </Col>
            </div>
        </div>
    )
}

export default Gridimage
