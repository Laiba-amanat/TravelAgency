import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Componenets/Homepage/Home/Bgvideo";
import Page1 from "./Componenets/Homepage/Services/Page1";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Layout from "./Layout/Layout";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Homepage />} />
          <Route path="/services" element={<Page1 />} />
        </Route>
      </Routes>
    </Router>


  );
}

export default App;
