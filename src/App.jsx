import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Faq from './components/Faq'
import Contact from './components/Contact'
function App() {

  return (
      <div className='app'>
   <Header />
   <Hero/>
   <hr />
   <About/>
   <hr />
   <Services/>
   <hr />
   <Projects/>
   <hr />
   <Faq/>
   <hr />
   <Contact/>
   <hr />
   <Footer/>
     </div>
  )
}

export default App
