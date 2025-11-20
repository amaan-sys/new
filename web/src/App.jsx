import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import About from './Components/About'
import Contact from "./Components/Contacts"
import Footer from "./Components/Footer"
import KeyServices from './Components/KeyServices'
import WhyChooseUs from './Components/WhyChooseUs'
import VisionMission from './Components/VisionMission'
import Privacy from './Pages/Privacy'
import ScrollToTop from "./Components/ScrollToTop";
import ConditionPage from './Pages/Condition';

function App() {

  return (
    <Router>
      <ScrollToTop />

      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <VisionMission />
              <KeyServices />
              <WhyChooseUs />
              <Contact />
            </>
          }
        />

        <Route path="/privacy" element={<Privacy />} />
        <Route path="/condition" element={<ConditionPage />} />
      
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
