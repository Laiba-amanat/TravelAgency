import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContactForm from './ContactForm';


const Contact = () => {
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
                        Contact
                    </h1>
                    <h1 style={{ fontSize: '25px', color: 'black', fontWeight: 'bold' }} className="mt-2 text-center">Traveling opens the door to creating memories</h1>
                    <p className='w-[700px] mt-3 lg:block hidden text-center' style={{ fontSize: '15px', fontWeight: 600, }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam ipsum nobis asperiores soluta voluptas quas voluptates. Molestiae tempora dignissimos, animi praesentium molestias perferendis porro expedita delectus. Soluta natus porro.</p>
                    <p className='block lg:hidden mt-3 text-center' style={{ fontSize: '15px', fontWeight: 600, }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam ipsum nobis asperiores soluta voluptas quas voluptates. Molestiae tempora dignissimos, animi praesentium molestias perferendis porro expedita delectus. </p>


                </div>
            </div>
            <div className=''>
                <div className=" pt-10 "
                    style={{ display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: "center" }}>
                    <div style={{ marginRight: '10px', flexGrow: '0.04', width: '50px', height: '2px', backgroundColor: 'orange' }} />
                    <h5 style={{ color: 'orange', margin: '0 10px', whiteSpace: 'nowrap', fontSize: '50px', fontStyle: 'oblique' }}>Contact</h5>
                    <div style={{ marginLeft: '10px', flexGrow: '0.04', height: '2px', width: '50px', backgroundColor: 'orange' }} />
                </div>
            </div>
            <Container className='mt-5'>
                <Row className="justify-content-md-center g-4">
                    <Col sm={12} md={6}>
                        <iframe
                            title="Google Maps location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42000.16537048391!2d74.25186862167968!3d31.560502099999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391905abda09dc29%3A0xcd0b9fc42b699e30!2sLahore%20Tour%20Guide!5e1!3m2!1sen!2s!4v1739614507134!5m2!1sen!2s"
                            width="100%"
                            height="400"
                            style={{ border: '0px' }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </Col>
                    <Col sm={12} md={6} className='mb-5'>
                       <ContactForm />
                    </Col>
                </Row>
            </Container>

        </div>

    )
}

export default Contact
