
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {  useState } from 'react';
import Image from 'react-bootstrap/Image';
import img1 from '../../../assets/image/team1.jpeg'
import img2 from '../../../assets/image/team2.jpg'
import img3 from '../../../assets/image/team3.jpg'
import img4 from '../../../assets/image/team4.jpg'
const TeamMember = () => {
    const [isHovering, setIsHovering] = useState(false);

    function handleMouseEnter() {
      setIsHovering(true);
    }
  
    function handleMouseLeave() {
      setIsHovering(false);
    }
    const [isHovering1, setIsHovering1] = useState(false);
  
    function handleMouseEnter1() {
      setIsHovering1(true);
    }
  
    function handleMouseLeave1() {
      setIsHovering1(false);
    }
    const [isHovering2, setIsHovering2] = useState(false);
  
    function handleMouseEnter2() {
      setIsHovering2(true);
    }
  
    function handleMouseLeave2() {
      setIsHovering2(false);
    }
    const [isHovering3, setIsHovering3] = useState(false);
  
    function handleMouseEnter3() {
      setIsHovering3(true);
    }
  
    function handleMouseLeave3() {
      setIsHovering3(false);
    }
    return (
        <div>
            <div>

                <Container className="mt-20 xxl w-100% mb-20">
                    <div
                        className="mx-3 mt-20"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center', // Center elements horizontally
                            textAlign: 'center'

                        }}
                    >
                        <div className='' style={{ marginRight: '10px', flexGrow: '0.04', width: '50px', height: '2px', backgroundColor: 'orange' }} />
                        <h5 style={{ color: 'orange', margin: '0 10px', whiteSpace: 'nowrap', fontSize: '50px', fontStyle: 'ittalic' }}>Team members</h5>
                        <div style={{ marginLeft: '10px', flexGrow: '0.04', height: '2px', width: '50px', backgroundColor: 'orange' }} />
                    </div>
                    <h3 className='text-center mb-5 font-bold' style={{  }}>Our Proffesional Team Member</h3>
                    <Row className="justify-content-md-center g-5">
                        <Col
                            md
                            lg
                            xl
                            xxl="3"
                            className="d-flex justify-content-center mt-20 animate__animated animate__fadeInUp"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            style={{ animationDelay: '2.3s', animationName: 'fadeInUp' }}
                        >
                            <div
                                style={{
                                    width: '280px',
                                    height: '350px',
                                    backgroundColor: '#F7FAFC',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    position: 'relative',

                                }}
                            >
                                <Image className={`transition-transform duration-500 mt-6  ${isHovering ? 'transform scale-110' : ''} `} style={{ width: '220px', height: '220px', marginTop: '10px' }} src={img1} roundedCircle />
                                <p style={{ marginTop: '25px', fontSize: '25px', fontWeight: 'bold', fontStyle: 'oblique' }}>Full Name</p>
                                <p style={{ fontSize: '20px', fontStyle: 'oblique', color: 'gray' }}>Designation</p>
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        textAlign: 'center',
                                        gap: '10px',
                                        position: 'absolute',
                                        bottom: '-60px', // Start hidden below the container
                                        left: '50%',
                                        transform: 'translateX(-50%)', // Center it
                                        backgroundColor: '#F7FAFC',
                                        width: '280px',
                                        height: '60px',
                                        opacity: isHovering ? 1 : 0, // Control opacity
                                        visibility: isHovering ? 'visible' : 'hidden', // Control visibility
                                        transition: 'opacity 0.3s ease, visibility 0s linear 0.3s', // Smooth transition
                                        pointerEvents: isHovering ? 'auto' : 'none', // Allow clicks only when visible
                                        zIndex: 1, // Ensure buttons are above other elements
                                    }}
                                >
                                    <button style={{ backgroundColor: 'orange', width: '50px', height: '50px', borderTopLeftRadius: '50%', borderTopRightRadius: '50%' }}><i style={{ color: 'white', fontSize: '20px' }} className='fab fa-facebook-f'></i> </button>
                                    <button style={{ backgroundColor: 'orange', width: '50px', height: '50px', borderTopLeftRadius: '50%', borderTopRightRadius: '50%' }}><i style={{ color: 'white', fontSize: '20px' }} className='fab fa-instagram'></i></button>
                                    <button style={{ backgroundColor: 'orange', width: '50px', height: '50px', borderTopLeftRadius: '50%', borderTopRightRadius: '50%' }}><i style={{ color: 'white', fontSize: '20px' }} className='fab fa-twitter'></i></button>
                                </div>
                            </div>
                        </Col>
                        <Col
                            md
                            lg
                            xl
                            xxl="3"
                            className="d-flex justify-content-center mt-20 animate__animated animate__fadeInUp"
                            onMouseEnter={handleMouseEnter1}
                            onMouseLeave={handleMouseLeave1}
                            style={{ animationDelay: '2.5s', animationName: 'fadeInUp' }}
                        >
                            <div
                                style={{
                                    width: '280px',
                                    height: '350px',
                                    backgroundColor: '#F7FAFC',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    position: 'relative',

                                }}
                            >
                                <Image className={`transition-transform duration-500 mt-6 ${isHovering1 ? 'transform scale-110' : ''} `} style={{ width: '220px', height: '220px', marginTop: '10px' }} src={img2} roundedCircle />
                                <p style={{ marginTop: '25px', fontSize: '25px', fontWeight: 'bold', fontStyle: 'oblique' }}>Full Name</p>
                                <p style={{ fontSize: '20px', fontStyle: 'oblique', color: 'gray' }}>Designation</p>
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        textAlign: 'center',
                                        gap: '10px',
                                        position: 'absolute',
                                        bottom: '-60px', // Start hidden below the container
                                        left: '50%',
                                        transform: 'translateX(-50%)', // Center it
                                        backgroundColor: '#F1F8FF',
                                        width: '280px',
                                        height: '60px',
                                        opacity: isHovering1 ? 1 : 0, // Control opacity
                                        visibility: isHovering1 ? 'visible' : 'hidden', // Control visibility
                                        transition: 'opacity 1.2s ease, visibility 0s linear 0.3s', // Smooth transition
                                        pointerEvents: isHovering1 ? 'auto' : 'none', // Allow clicks only when visible
                                        zIndex: 1, // Ensure buttons are above other elements
                                    }}
                                >
                                    <button style={{ backgroundColor: 'orange', width: '50px', height: '50px', borderTopLeftRadius: '50%', borderTopRightRadius: '50%' }}><i style={{ color: 'white', fontSize: '20px' }} className='fab fa-facebook-f'></i> </button>
                                    <button style={{ backgroundColor: 'orange', width: '50px', height: '50px', borderTopLeftRadius: '50%', borderTopRightRadius: '50%' }}><i style={{ color: 'white', fontSize: '20px' }} className='fab fa-instagram'></i></button>
                                    <button style={{ backgroundColor: 'orange', width: '50px', height: '50px', borderTopLeftRadius: '50%', borderTopRightRadius: '50%' }}><i style={{ color: 'white', fontSize: '20px' }} className='fab fa-twitter'></i></button>
                                </div>
                            </div>
                        </Col>
                        <Col
                            md
                            lg
                            xl
                            xxl="3"
                            className="d-flex justify-content-center mt-20 animate__animated animate__fadeInUp"
                            onMouseEnter={handleMouseEnter2}
                            onMouseLeave={handleMouseLeave2}
                            style={{ animationDelay: '2.7s', animationName: 'fadeInUp' }}
                        >
                            <div
                                style={{
                                    width: '280px',
                                    height: '350px',
                                    backgroundColor: '#F7FAFC',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    position: 'relative',

                                }}
                            >
                                <Image className={`transition-transform duration-500 mt-6 ${isHovering2 ? 'transform scale-110' : ''} `} style={{ width: '220px', height: '220px', marginTop: '10px' }} src={img3} roundedCircle />
                                <p style={{ marginTop: '25px', fontSize: '25px', fontWeight: 'bold', fontStyle: 'oblique' }}>Full Name</p>
                                <p style={{ fontSize: '20px', fontStyle: 'oblique', color: 'gray' }}>Designation</p>
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        textAlign: 'center',
                                        gap: '10px',
                                        position: 'absolute',
                                        bottom: '-60px', // Start hidden below the container
                                        left: '50%',
                                        transform: 'translateX(-50%)', // Center it
                                        backgroundColor: '#F7FAFC',
                                        width: '280px',
                                        height: '60px',
                                        opacity: isHovering2 ? 1 : 0, // Control opacity
                                        visibility: isHovering2 ? 'visible' : 'hidden', // Control visibility
                                        transition: 'opacity 0.3s ease, visibility 0s linear 0.3s', // Smooth transition
                                        pointerEvents: isHovering2 ? 'auto' : 'none', // Allow clicks only when visible
                                        zIndex: 1, // Ensure buttons are above other elements
                                    }}
                                >
                                    <button style={{ backgroundColor: 'orange', width: '50px', height: '50px', borderTopLeftRadius: '50%', borderTopRightRadius: '50%' }}><i style={{ color: 'white', fontSize: '20px' }} className='fab fa-facebook-f'></i> </button>
                                    <button style={{ backgroundColor: 'orange', width: '50px', height: '50px', borderTopLeftRadius: '50%', borderTopRightRadius: '50%' }}><i style={{ color: 'white', fontSize: '20px' }} className='fab fa-instagram'></i></button>
                                    <button style={{ backgroundColor: 'orange', width: '50px', height: '50px', borderTopLeftRadius: '50%', borderTopRightRadius: '50%' }}><i style={{ color: 'white', fontSize: '20px' }} className='fab fa-twitter'></i></button>
                                </div>
                            </div>
                        </Col>

                        <Col
                            md
                            lg
                            xl
                            xxl="3"
                            className="d-flex justify-content-center mt-20 animate__animated animate__fadeInUp fd"
                            onMouseEnter={handleMouseEnter3}
                            onMouseLeave={handleMouseLeave3}
                            style={{ animationDelay: '2.9s', animationName: 'fadeInUp' }}
                        >
                            <div
                                style={{
                                    width: '280px',
                                    height: '350px',
                                    backgroundColor: '#F7FAFC',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    position: 'relative',

                                }}
                            >
                                <Image className={`transition-transform duration-500 mt-6 ${isHovering3 ? 'transform scale-110' : ''} `} style={{ width: '220px', height: '220px', marginTop: '10px' }} src={img4} roundedCircle />
                                <p style={{ marginTop: '25px', fontSize: '25px', fontWeight: 'bold', fontStyle: 'oblique' }}>Full Name</p>
                                <p style={{ fontSize: '20px', fontStyle: 'oblique', color: 'gray' }}>Designation</p>
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        textAlign: 'center',
                                        gap: '10px',
                                        position: 'absolute',
                                        bottom: '-60px', // Start hidden below the container
                                        left: '50%',
                                        transform: 'translateX(-50%)', // Center it
                                        backgroundColor: '#F7FAFC',
                                        width: '280px',
                                        height: '60px',
                                        opacity: isHovering3 ? 1 : 0, // Control opacity
                                        visibility: isHovering3 ? 'visible' : 'hidden', // Control visibility
                                        transition: 'opacity 0.3s ease, visibility 0s linear 0.3s', // Smooth transition
                                        pointerEvents: isHovering3 ? 'auto' : 'none', // Allow clicks only when visible
                                        zIndex: 1, // Ensure buttons are above other elements
                                    }}
                                >
                                    <button style={{ backgroundColor: 'orange', width: '50px', height: '50px', borderTopLeftRadius: '50%', borderTopRightRadius: '50%' }}><i style={{ color: 'white', fontSize: '20px' }} className='fab fa-facebook-f'></i> </button>
                                    <button style={{ backgroundColor: 'orange', width: '50px', height: '50px', borderTopLeftRadius: '50%', borderTopRightRadius: '50%' }}><i style={{ color: 'white', fontSize: '20px' }} className='fab fa-instagram'></i></button>
                                    <button style={{ backgroundColor: 'orange', width: '50px', height: '50px', borderTopLeftRadius: '50%', borderTopRightRadius: '50%' }}><i style={{ color: 'white', fontSize: '20px' }} className='fab fa-twitter'></i></button>
                                </div>
                            </div>
                        </Col>

                    </Row>
                </Container>



            </div>
        </div>
    )
}

export default TeamMember
