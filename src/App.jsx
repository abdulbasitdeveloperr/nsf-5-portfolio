import React from 'react'
import Header from './components/header/Header'
import HeroSection from './components/heroSection/HeroSection'
import './App.css'
import AboutMe from './components/aboutMe/AboutMe'
import Services from './components/services/Services'

const App = () => {
  return (
    <div>
      <Header />
      <div className='main-component-wrapper'>
        <HeroSection />
        <div className='about-me-main'>
          <AboutMe />
        </div>
        <Services />
      </div>
    </div>
  )
}

export default App
