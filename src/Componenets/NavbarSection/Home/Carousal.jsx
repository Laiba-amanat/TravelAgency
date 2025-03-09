import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Outlet } from "react-router-dom";
const Carousal = () => {
  return (
    
          <div>
        
        {/* <div className=" mt-10"
                style={{ display: 'flex', alignItems: 'center', textAlign: 'center',justifyContent:"center" }}>
                 <div style={{ marginRight: '10px', flexGrow: '0.04', width: '50px', height: '2px', backgroundColor: 'orange' }} />
                <h5 style={{ color: 'orange', margin: '0 10px', whiteSpace: 'nowrap', fontSize: '40px', fontStyle: 'oblique' }}>Destination Images</h5>
                <div style={{ marginLeft: '10px', flexGrow: '0.04', height: '2px', width: '50px', backgroundColor: 'orange' }} />
              </div> */}
    <Carousel data-bs-theme="dark">
    <Carousel.Item>
    
    <div className="flex justify-evenly  h-[650px]">
      <div className=" w-500 h-[500px] p-5"><Link to="/Page2"><img
        className="w-500 h-[500px]"
        src="https://travelworld-booking.netlify.app/static/media/gallery-05.45ab035583b65864c53a.jpg"
        width={500}
        height={500}
        alt="First slide"
      /> </Link></div>
      <div className="w-300 h-[500px]  flex   justify-evenly items-center ">
          <div className="w-300 h-[400px] d-none d-lg-block  d-md-block" >
          <Link to="/Page2"> <img
        className="w-300 h-[400px]"
        src="https://travelworld-booking.netlify.app/static/media/gallery-02.9acd7c84d293f45ac15e.jpg"
        alt="First slide"
        width={300}
        height={400}
      /> </Link>
      <br />
      <p>Destintion place of differnet countery  <br/><Link to="/Page2"> <button className="bg-[#FAA935] text-white px-4 py-2 text-lg" style={{fontSize:'20px', border:'2px solid white',fontWeight:"500"}}>VIEW DESTINATION</button></Link> </p>
          </div>
         
      </div>
     
    </div>
    </Carousel.Item>
    <Carousel.Item>
    <div className="flex justify-evenly  h-[650px]">
      <div className=" w-500 h-[500px] p-5"><Link to="/Page2"><img
        className="w-500 h-[500px] rounded"
        src="https://travelworld-booking.netlify.app/tour-images/tour-img05.jpg"
        width={500}
        height={500}
        alt="First slide"
      /> </Link></div>
      <div className="w-300 h-[500px]  flex   justify-evenly items-center ">
          <div className="w-300 h-[400px] d-none d-lg-block  d-md-block" >
          <Link to="/Page2"> <img
        className="w-300 h-[300px] rounded mt-10"
        src="https://cdn.pixabay.com/photo/2019/08/10/03/15/bridge-4396131_1280.jpg"
        alt="First slide"
        width={300}
        height={300}
      /> </Link>
      <br />
      <p>Destintion place of differnet countery  <br/><Link to="/Page2"> <button className="bg-[#FAA935] text-white px-4 py-2 text-lg" style={{fontSize:'20px',fontWeight:"500" }}>VIEW DESTINATION</button></Link> </p>
          </div>
         
      </div>
     
    </div>
    </Carousel.Item>
    <Carousel.Item>
    <div className="flex justify-evenly  h-[650px]">
      <div className=" w-500 h-[500px] p-5"><Link to="/Page2"><img
        className="w-500 h-[500px]"
        src="https://img.freepik.com/free-photo/landmark-camera-architecture-view-woman_1150-1218.jpg?ga=GA1.1.62612920.1739082954&semt=ais_incoming"
        width={500}
        height={500}
        alt="First slide"
      /> </Link></div>
      <div className="w-300 h-[650px]  flex   justify-evenly items-center ">
          <div className="w-300 h-[400px] d-none d-lg-block  d-md-block" >
          <Link to="/Page2"> <img
        className="w-300 h-[400px]"
        src="https://travelworld-booking.netlify.app/static/media/gallery-04.66c107edd159054ae8cf.jpg"
        alt="First slide"
        width={300}
        height={400}
      /> </Link>
      <br />
      <p>Destintion place of differnet countery    <br /><Link to="/Page2"> <button className="bg-[#FAA935] text-white px-4 py-2 text-lg" style={{fontSize:'20px', border:'2px solid white', fontWeight:"500"}}>VIEW DESTINATION</button></Link> </p>
          </div>
         
      </div>
     
    </div>
  
    </Carousel.Item>
   
  </Carousel>
  <Outlet />
  </div>

    
  )
}

export default Carousal
