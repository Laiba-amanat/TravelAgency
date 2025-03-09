
import { useState } from 'react';
import AOS from 'aos';  //animate on scroll
import  { useEffect} from 'react';
import 'animate.css';

function Props(props) {
    useEffect(()=>{
        AOS.init({
            duration:1000,
        })
       },[])
     
    const [currentImg, setCurrentImg] = useState(false);
    return (
        <div
            onMouseEnter={() => setCurrentImg(true)}
            onMouseLeave={() => setCurrentImg(false)}

        >
            <div  data-aos='fadeInUp'  className='p-4 text-start mt-10 mx-auto md:mx-0 animate__animated animate__fadeInUp' style={{
                backgroundColor: currentImg ? 'orange' : '#F7FAFC',
                color: currentImg ? 'white' : 'black',
                width: '250px',
                height: '260px',
                transition: 'background-color 0.3s, color 0.3s',
                animationDelay:'0.9s',animationName:'fadeInUp'
            }}>
                <i style={{
                    color: currentImg ? 'white' : 'orange',
                    fontSize: '60px',
                    transition: 'color 0.3s',
                }} className={props.iconurl}></i>
                <h1 className='mt-4' style={{ fontSize: '22px', fontStyle: 'oblique', fontWeight: 'bold' }}>{props.title}</h1>
                <p className='mt-2' style={{ color: 'gray', fontSize: '17px' }}>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
            </div>
        </div>
    )
}

export default Props
