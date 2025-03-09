
import '../../../Style/bgvideo.css';



const Homepage = () => {
  return (
    <div>
   
    <div className="background-video">
      {/* Background Video */}
      <video autoPlay muted loop playsInline>
        <source src="hero.mp4" type="video/mp4" />
      </video>

      {/* Content on Top of Video */}
      <div className="content flex flex-col items-center text-center">
  <p className="h-[70px] w-[400px] py-3 text-black text-3xl italic bg-[#FAA935] rounded-[30px]">
    Know before you go
  </p>
  <h1 className="mt-4">Discover the Best Place Welcome!</h1>
  <p className='w-[700px] mt-3 lg:block hidden' style={{fontSize:'15px', fontWeight:600,}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam ipsum nobis asperiores soluta voluptas quas voluptates. Molestiae tempora dignissimos, animi praesentium molestias perferendis porro expedita delectus. Soluta natus porro.</p>
  <p className='block lg:hidden mt-3' style={{fontSize:'15px', fontWeight:600,}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam ipsum nobis asperiores soluta voluptas quas voluptates. Molestiae tempora dignissimos, animi praesentium molestias perferendis porro expedita delectus. Soluta natus porro.</p>
</div>
    </div>
    
    
   
    </div>
  )
}

export default Homepage


