import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact'
function App() {
  
  
  return (
    <div className='bg-[#0e0c1e] scroll-smooth px-2'>

        <Navbar></Navbar>
        <Hero></Hero>
        
        <About></About>
        <Work></Work>
        <Contact></Contact>
    </div>
  )
}

export default App
