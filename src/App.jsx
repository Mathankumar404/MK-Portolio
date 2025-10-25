import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import About from './components/About'
function App() {
  const [count, setCount] = useState(0)

  return (
      <div className='app'>
   <Header />
   <Hero/>
   <About/>
   <Footer/>
     </div>
  )
}

export default App
