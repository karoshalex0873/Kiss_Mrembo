// import React from 'react

import About from "./componets/About"
import Booking from "./componets/Booking"
import Contact from "./componets/Contact"
import Home from "./componets/Home"
import Navbar from "./componets/Navbar"
import Services from "./componets/Services"

const App = () => {
  return (
    <div>
    <Navbar/>
    <div>
    <Home />
    <About />
    <Services />
    <Booking />
    <Contact />
    </div>
    
    </div>
  )
}

export default App