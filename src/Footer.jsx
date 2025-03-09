import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="py-10 px-6 md:px-12" style={{ borderTop: "2px solid #FAA935" }}>
      <div className="container mx-auto">
        {/* Small Screen Accordion */}
        <div className="md:hidden">
          {[
            { title: "Contact", content: (
                <>
                  <p className="flex items-center gap-2"><FaPhoneAlt /> +91 1234567890</p>
                  <p className="flex items-center gap-2"><FaEnvelope /> example@example.com</p>
                </>
              ) 
            },
            { title: "Quick Links", content: (
                <ul className="space-y-2">
                  <li><a href="#" className="text-black no-underline hover:underline">About Us</a></li>
                  <li><a href="#" className="text-black no-underline hover:underline">Privacy Policy</a></li>
                  <li><a href="#" className="text-black no-underline hover:underline">Terms & Conditions</a></li>
                  <li><a href="#" className="text-black no-underline hover:underline">Delivery Information</a></li>
                </ul>
              )
            },
            { title: "Customer Care", content: (
                <ul className="space-y-2">
                  <li><a href="#" className="text-black no-underline hover:underline">About Us</a></li>
                  <li><a href="#" className="text-black no-underline hover:underline">Privacy Policy</a></li>
                  <li><a href="#" className="text-black no-underline hover:underline">Terms & Conditions</a></li>
                  <li><a href="#" className="text-black no-underline hover:underline">Delivery Information</a></li>
                </ul>
              )
            },
            { title: "Follow Us", content: (
                <>
                  <div className="flex gap-4">
                    <a href="#" className="text-black no-underline hover:text-[#FAA935]" style={{ fontSize: "25px" }}><FaFacebookF /></a>
                    <a href="#" className="text-black no-underline hover:text-[#FAA935]" style={{ fontSize: "25px" }}><FaTwitter /></a>
                    <a href="#" className="text-black no-underline hover:text-[#FAA935]" style={{ fontSize: "25px" }}><FaInstagram /></a>
                    <a href="#" className="text-black no-underline hover:text-[#FAA935]" style={{ fontSize: "25px" }}><FaLinkedinIn /></a>
                  </div>
                  <h2 className="text-lg font-semibold mt-6 mb-4">Newsletter</h2>
                  <form className="flex">
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      className="px-4 py-2 w-full rounded-l-lg text-black"
                      style={{ border: '1px solid black' }}
                    />
                    <button type="submit" className="bg-[#FAA935] px-4 py-2 rounded-r-lg hover:bg-yellow-400">
                      Subscribe
                    </button>
                  </form>
                </>
              )
            }
          ].map((item, index) => (
            <div key={index} className="mb-4 border-b">
              <button 
                className="w-full flex justify-between items-center py-2 text-2xl font-bold hover:text-[#FAA935]" 
                onClick={() => toggleSection(index)}
              >
                {item.title}
                <span>{openSection === index ? "▲" : "▼"}</span>
              </button>
              {openSection === index && <div className="p-2">{item.content}</div>}
            </div>
          ))}
        </div>

        {/* Large Screen Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4 hover:text-[#FAA935]">Contact</h2>
            <p className="flex items-center gap-2"><FaPhoneAlt /> +91 1234567890</p>
            <p className="flex items-center gap-2"><FaEnvelope /> example@example.com</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4 hover:text-[#FAA935]">Quick Links</h2>
            <ul className="space-y-2">
              <li><a href="#" className="text-black no-underline hover:underline">About Us</a></li>
              <li><a href="#" className="text-black no-underline hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="text-black no-underline hover:underline">Terms & Conditions</a></li>
              <li><a href="#" className="text-black no-underline hover:underline">Delivery Information</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4 hover:text-[#FAA935]">Customer Care</h2>
            <ul className="space-y-2">
              <li><a href="#" className="text-black no-underline hover:underline">About Us</a></li>
              <li><a href="#" className="text-black no-underline hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="text-black no-underline hover:underline">Terms & Conditions</a></li>
              <li><a href="#" className="text-black no-underline hover:underline">Delivery Information</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4 hover:text-[#FAA935]">Follow Us</h2>
            <div className="flex gap-4">
              <a href="#" className="text-black no-underline hover:text-[#FAA935]" style={{ fontSize: "25px" }}><FaFacebookF /></a>
              <a href="#" className="text-black no-underline hover:text-[#FAA935]" style={{ fontSize: "25px" }}><FaTwitter /></a>
              <a href="#" className="text-black no-underline hover:text-[#FAA935]" style={{ fontSize: "25px" }}><FaInstagram /></a>
              <a href="#" className="text-black no-underline hover:text-[#FAA935]" style={{ fontSize: "25px" }}><FaLinkedinIn /></a>
            </div>
            <h2 className="text-lg font-semibold mt-6 mb-4">Newsletter</h2>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-4 py-2 w-full rounded-l-lg text-black"
                style={{ border: '1px solid black' }}
              />
              <button type="submit" className="bg-[#FAA935] px-4 py-2 rounded-r-lg hover:bg-yellow-400">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
