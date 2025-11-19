import './App.css'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import About from './Components/About'
// import Services from './Components/Services'
import Contact from "./Components/Contacts"
import Footer from "./Components/Footer"
import KeyServices from './Components/KeyServices'
import WhyChooseUs from './Components/WhyChooseUs'
import VisionMission from './Components/VisionMission'

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <VisionMission/>
      <KeyServices/>
      {/* <Services/> */}
      <WhyChooseUs/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
