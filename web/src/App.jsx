import './App.css'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import About from './Components/About'
import Services from './Components/Services'
import Contact from "./Components/Contacts"
import Footer from "./Components/Footer"
import KeyServices from './Components/KeyServices'

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <KeyServices/>
      <Services/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
