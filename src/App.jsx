import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Layout from "./Layout/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./Componenets/Auth/Register";
import Login from "./Componenets/Auth/Login";
import HomePage from "./Pages/Homepage";
import ServicesPage from "./Pages/Servicespage";
import DestinationPage from "./Pages/Destinationpage";
import BookingPage from "./Pages/BookingPage";
import ContactPage from "./Pages/ContactPage";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/Destination" element={<DestinationPage />} />
          <Route path="/Booking" element={<BookingPage />} />
          <Route path="/Contact" element={<ContactPage />} />
         

        </Route>
         <Route path="/Register" element={<Register />} />
         <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>
    


  );
}

export default App;
