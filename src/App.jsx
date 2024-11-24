import { useEffect } from 'react'
import './App.css'
import Footer from './components/Footer'
import Hero from './components/Hero'
import MoveTop from './components/MoveTop'
import Navbar from './components/Navbar'
import Projects from './components/Projects'

function App() {

  useEffect(() => {
    const preload = () => {
      import('./components/Hero')
    }
    preload()
  }, [])

  return (
    <>
     <MoveTop/>
     <Navbar/>
     <Hero/>
     <Projects/>
     <Footer/>
    </>
  )
}

export default App