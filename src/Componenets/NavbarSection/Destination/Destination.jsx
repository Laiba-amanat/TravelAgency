import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';
import Image from 'react-bootstrap/Image';
import img1 from '../../../assets/image/team1.jpeg'
import img2 from '../../../assets/image/team2.jpg'
import img3 from '../../../assets/image/team3.jpg'
import img4 from '../../../assets/image/team4.jpg'
import imge1 from '../../../assets/image/des6.jpg'
import imge2 from '../../../assets/image/des2.jpg'
import imge3 from '../../../assets/image/des3.jpg'
import imge4 from '../../../assets/image/des5.jpg'
const Destination = () => {
  const [count, setCount] = useState(1); // Initialize state to start from 1

  useEffect(() => {
    // Check if the count is less than or equal to 15
    if (count < 15) {
      const timer = setInterval(() => {
        setCount(prevCount => prevCount + 1); // Increment count by 1
      }, 200); // Set interval to 100 milliseconds (0.1 seconds)

      // Clear the interval when count reaches 15 or the component unmounts
      return () => clearInterval(timer);
    }
  }, [count]);
  const [countr, setCountr] = useState(1); // Initialize state to start from 1

  useEffect(() => {
    // Check if the count is less than or equal to 50
    if (countr < 50) {
      const timer1 = setInterval(() => {
        setCountr(prevCount => prevCount + 1); // Increment count by 1
      }, 200); // Set interval to 100 milliseconds (0.1 seconds)

      // Clear the interval when count reaches 15 or the component unmounts
      return () => clearInterval(timer1);
    }
  }, [countr]);
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
           Destination
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
                <h5 style={{ color: 'orange', margin: '0 10px', whiteSpace: 'nowrap', fontSize: '50px', fontStyle: 'oblique' }}>Destination</h5>
                <div style={{ marginLeft: '10px', flexGrow: '0.04', height: '2px', width: '50px', backgroundColor: 'orange' }} />
              </div>
    </div>
    <Container fluid className='mt-20 xxl mb-40px'>
          <Row className="justify-content-md-center">
            <Col md lg xl xll="6" className="" style={{  }}>
            <div className="flex flex-wrap justify-center gap-4 p-4">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="lg:h-[250px] lg:w-[300px] md:h-[250px] md:w-100  rounded-lg overflow-hidden">
          <img
            src={imge1}
            alt="Background"
            style={{ animationDelay: "0.8s", animationName: "zoomIn" }}
            className="object-cover h-full w-full img-fluid animate__animated animate__zoomIn"
          />
        </div>
        <div className="lg:h-[250px] lg:w-[250px] md:h-[250px] md:w-100  rounded-lg overflow-hidden lg:pt-20 md:pt-5">
          <img
            src={imge2}
            alt="Background"
            style={{ animationDelay: "1s", animationName: "zoomIn" }}
            className="object-cover h-full w-full img-fluid animate__animated animate__zoomIn rounded"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="lg:h-[250px] lg:w-[250px] md:h-[250px] md:w-100  rounded-lg overflow-hidden md:pt-5">
          <img
            src={imge3}
            alt="Background"
            style={{ animationDelay: "1.3s", animationName: "zoomIn" }}
            className="object-cover h-full w-full img-fluid animate__animated animate__zoomIn rounded"
          />
        </div>
        <div className="lg:h-[250px] lg:w-[300px] md:h-[250px] md:w-100  rounded-lg overflow-hidden md:pt-5">
          <img
            src={imge4}
            alt="Background"
            style={{ animationDelay: "1.7s", animationName: "zoomIn" }}
            className="object-cover h-full w-full img-fluid animate__animated animate__zoomIn rounded-sm rounded"
          />
        </div>
      </div>
    </div>
            </Col>
            <Col sm md lg xl xll="6" className="" >
              <div className="mx-3 mt-3"
                style={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                {/* <div style={{ marginRight: '10px', flexGrow: '0.04', width: '25px', height: '2px', backgroundColor: 'orange' }} /> */}
                <h5 style={{ color: 'orange', margin: '0 10px', whiteSpace: 'nowrap', fontSize: '1.59rem', fontStyle: 'oblique' }}>Destination</h5>
                <div style={{ marginLeft: '10px', flexGrow: '0.04', height: '2px', width: '45px', backgroundColor: 'orange' }} />
              </div>
              <h1 className='text-start' style={{ fontSize: '40px', fontWeight: 'bold', fontStyle: 'oblique' }}>Welcom to  Travel Agency</h1>
              <div className='mt-5 text-start' style={{ color: 'gray', fontSize: '17px' }}>
                <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam
                  <br />
                  amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit
                </p>
              </div>
              <div className='mt-5 text-start' style={{ color: 'gray', fontSize: '17px' }}>
                <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam
                  <br />amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita
                  <br />
                  amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit
                </p>
              </div>
              <Row className="justify-content-md-center">
                <Col sm md lg xl xll="6" className="">
                  <div className="mx-3 mt-5"
                    style={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                    <div style={{ marginRight: '10px', flexGrow: '0.01', width: '5px', height: '55px', backgroundColor: 'orange' }} />
                    <h5 style={{ color: 'orange', margin: '0 10px', whiteSpace: 'nowrap', fontSize: '50px', fontStyle: '', fontWeight: 'bolder' }}> {count}</h5>
                    <p className='text-start' style={{ color: 'gray', margin: '0 10px', whiteSpace: 'nowrap', fontSize: '17px', fontStyle: '', fontWeight: '' }}>Years of
                      <br /><span style={{ color: 'black', fontWeight: 'bold', fontSize: '22px' }}>EXPERIENCE</span>
                    </p>
                  </div>
                </Col>

                <Col sm md lg xl xll="6" className="">
                  <div className="mx-3 mt-5"
                    style={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                    <div style={{ marginRight: '10px', flexGrow: '0.01', width: '5px', height: '55px', backgroundColor: 'orange' }} />
                    <h5 style={{ color: 'orange', margin: '0 10px', whiteSpace: 'nowrap', fontSize: '50px', fontStyle: '', fontWeight: 'bolder' }}>{countr}</h5>
                    <p className='text-start' style={{ color: 'gray', margin: '0 10px', whiteSpace: 'nowrap', fontSize: '17px', fontStyle: '', fontWeight: '' }}>popular
                      <br /><span style={{ color: 'black', fontWeight: 'bold', fontSize: '22px' }}>Team Member</span>
                    </p>
                  </div>
                </Col>
              </Row>
              <div className="flex justify-start mt-5">
                <button className="text-white px-4 py-2 text-lg  " style={{ fontSize: '20px', backgroundColor: 'orange', border: '1px solid white', height: '60px', width: '200px', color: 'white', borderRadius: '5px' }}>READ MORE</button>
              </div>
              <br />
            </Col>
          </Row>
        </Container>
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
              <div className='' style={{ marginRight: '10px', flexGrow: '0.04', width: '25px', height: '2px', backgroundColor: 'orange' }} />
              <h5 style={{ color: 'orange', margin: '0 10px', whiteSpace: 'nowrap', fontSize: '1.59rem', fontStyle: 'oblique' }}>Team members</h5>
              <div style={{ marginLeft: '10px', flexGrow: '0.04', height: '2px', width: '45px', backgroundColor: 'orange' }} />
            </div>
            <h1 className='text-center mb-5' style={{ fontSize: '40px', fontWeight: 'bold', fontStyle: 'oblique' }}>Our Proffesional Member</h1>
            <Row className="justify-content-md-center g-5">
            <Col 
                md
                lg
                xl
                xxl="3"
                className="d-flex justify-content-center mt-20 animate__animated animate__fadeInUp"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{animationDelay:'2.3s',animationName:'fadeInUp'}}
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
                  <Image className={`transition-transform duration-500 mt-6  ${isHovering ? 'transform scale-110' : ''} `}  style={{ width: '220px', height: '220px', marginTop: '10px' }} src={img1} roundedCircle />
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
                style={{animationDelay:'2.5s',animationName:'fadeInUp'}}
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
                  <Image className={`transition-transform duration-500 mt-6 ${isHovering1 ? 'transform scale-110' : ''} `}  style={{ width: '220px', height: '220px', marginTop: '10px' }} src={img2} roundedCircle />
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
                style={{animationDelay:'2.7s',animationName:'fadeInUp'}}
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
                  <Image className={`transition-transform duration-500 mt-6 ${isHovering2 ? 'transform scale-110' : ''} `}  style={{ width: '220px', height: '220px', marginTop: '10px' }} src={img3} roundedCircle />
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
                style={{animationDelay:'2.9s',animationName:'fadeInUp'}}
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
                  <Image className={`transition-transform duration-500 mt-6 ${isHovering3 ? 'transform scale-110' : ''} `}  style={{ width: '220px', height: '220px', marginTop: '10px' }} src={img4} roundedCircle />
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

export default Destination
