import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom"; // Importing Link


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation(); // Corrected useLocation()

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const isActive = (path) => pathname === path; // Function to check active link

  return (
    <header className="border-b-2  text-black sticky top-0 z-50" style={{ borderBottom:"2px solid #FAA935",backgroundColor:"white"}}>
      <div className="py-4 flex items-center justify-between bg-bodyColor max-w-screen-xl mx-auto pl-5">
        {/* Left Logo */}
        <div className="group pl-2 text-2xl font-bold flex items-center space-x-2">
  <img src="https://travelworld-booking.netlify.app/static/media/logo.20544e60ea4eaeee7661.png" width={180} height={40} alt="Logo" />
  
</div>


        {/* Desktop Menu */}
        <nav className="hidden md:flex pr-10 gap-8 text-sm font-semibold uppercase" style={{fontWeight:650}}>
          <Link to="/" className="text-black no-underline">
            <span className={`cursor-pointer ${isActive("/") ? "text-[#FAA935] underline" : ""} hover:text-[#FAA935] hover:underline`}>
              Home
            </span>
          </Link>
          <Link to="/services" className="text-black no-underline">
            <span className={`cursor-pointer ${isActive("/services") ? "text-[#FAA935] underline" : ""} hover:text-[#FAA935] hover:underline`}>
              Services
            </span>
          </Link>
          <Link to="/Destination" className="text-black no-underline">
            <span className={`cursor-pointer ${isActive("/resume") ? "text-[#FAA935] underline" : ""} hover:text-[#FAA935] hover:underline`}>
              Destination
            </span>
          </Link>
          <Link to="/Booking" className="text-black no-underline">
            <span className={`cursor-pointer ${isActive("/work") ? "text-[#FAA935] underline" : ""} hover:text-[#FAA935] hover:underline`}>
              Booking
            </span>
          </Link>
          <Link to="/contact" className="text-black no-underline">
            <span className={`cursor-pointer ${isActive("/contact") ? "text-[#FAA935] underline" : ""} hover:text-[#FAA935] hover:underline`}>
              Contact
            </span>
          </Link>
         
        </nav>

   
        <div
  className="flex items-center justify-between  rounded-[30px] w-[200px] h-[40px] "
>
  <Link to="/Login" className="text-black no-underline">
    <span
      className={`cursor-pointer ${
        isActive("/contact") ? "text-[#FAA935] underline" : ""
      } hover:text-[#FAA935] hover:underline`}
      style={{ fontWeight: 650 }}
    >
      Login
    </span>
  </Link>
  <Link to="/Register">
    <button
      className="text-center bg-[#FAA935] w-[120px] h-[40px] rounded-[30px] font-semibold text-white"
    >
      Register
    </button>
  </Link>
</div>

              {/* Mobile Hamburger Button */}
        <button className="md:hidden mr-5 flex flex-col items-center justify-center w-10 h-10" onClick={toggleMenu}>
          <div className="w-6 h-0.5 bg-black mb-1"></div>
          <div className="w-6 h-0.5 bg-black mb-1"></div>
          <div className="w-6 h-0.5 bg-black"></div>
        </button>
      </div>

      {/* Mobile Slide-in Menu */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-white text-black z-50 transform ${
        menuOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out`}>
        {/* Close Button */}
        <button className="absolute top-4 right-4 text-black text-2xl font-bold" onClick={toggleMenu}>
          ✕
        </button>

        {/* Mobile Navigation Menu */}
        <nav className="mt-16 flex flex-col gap-8 ml-5 text-lg font-semibold uppercase">
          <Link to="/"className="text-black no-underline" onClick={toggleMenu}>
          
            <span className={`cursor-pointer ${isActive("/") ? "text-[#FAA935] underline" : ""} hover:text-[#FAA935] hover:underline`}>
              Home
            </span>
          </Link>
          <Link to="/services"className="text-black no-underline" onClick={toggleMenu}>
            <span className={`cursor-pointer ${isActive("/services") ? "text-[#FAA935] underline" : ""} hover:text-[#FAA935] hover:underline`}>
              Services
            </span>
          </Link>
          <Link to="/Destination"className="text-black no-underline" onClick={toggleMenu}>
            <span className={`cursor-pointer ${isActive("/resume") ? "text-[#FAA935] underline" : ""} hover:text-[#FAA935] hover:underline`}>
             \Destination
            </span>
          </Link>
          <Link to="/Booking"className="text-black no-underline" onClick={toggleMenu}>
            <span className={`cursor-pointer ${isActive("/work") ? "text-[#FAA935] underline" : ""} hover:text-[#FAA935] hover:underline`}>
              Booking
            </span>
          </Link>
          <Link to="/contact"className="text-black no-underline" onClick={toggleMenu}>
            <span className={`cursor-pointer ${isActive("/contact") ? "text-[#FAA935] underline" : ""} hover:text-[#FAA935] hover:underline`}>
              Contact
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
