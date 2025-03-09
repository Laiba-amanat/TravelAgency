import { ToastContainer } from "react-toastify"
import { useState } from "react";

const Register = () => {
  const [loginInfo, setLoginInfo] = useState({
    name:'',
    email:'',
    password:''

  });

  const handleChange = (e) => {
     const {name,value} = e.target;
     console.log(name,value);
     const copyLoginInfo = {...loginInfo};
     copyLoginInfo[name] = value;
     setLoginInfo(copyLoginInfo);
  }
  console.log("loginInfo->",loginInfo)
  const handleSignup = (e) => {
    e.preventDefault();
  }
  return (
    <div className="  w-full lg:h-[600px] bg-slate-100  flex flex-col md:flex-row items-center justify-center pt-10">
        
    {/* Image Div - Small screens pe upar, md+ screens pe left */}
    <div className="w-[400px] md:w-[500px] h-[400px] bg-stone-50 md:h-[500px] flex justify-center items-center">
      <img src="/images/sample.png" alt="Sample" className="w-full h-full object-cover rounded-lg" />
    </div>

    {/* Form Div - Small screens pe neeche, md+ screens pe right */}
    <div className="w-[400px] md:w-[400px] h-[500px] flex flex-col justify-center items-center bg-[#fbb552] py-10">
      <img width={100} height={100} src="/images/login.png" alt="Login Icon" />
      <h1 className="text-4xl font-bold mb-6 text-white">Register</h1>
      <form onSubmit={handleSignup} className="w-[300px] flex flex-col gap-4">
        <input type="text" placeholder="Username" onChange={handleChange} className="border p-2 rounded-md" />
        <input type="email" placeholder="Email" onChange={handleChange} className="border p-2 rounded-md" />
        <input type="password" placeholder="Password" onChange={handleChange} className="border p-2 rounded-md" />
        <button type="submit" className="bg-[#343a40] text-white px-4 py-2 rounded-md hover:bg-gray-900 font-bold">Create account</button>
      </form>
    </div>
    <ToastContainer />
    </div>
  
  
  )
}

export default Register



