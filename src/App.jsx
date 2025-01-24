import React from 'react'
import Header from './components/header/Header'
import HeroSection from './components/heroSection/HeroSection'
import './App.css'
import AboutMe from './components/aboutMe/AboutMe'
import Services from './components/services/Services'
import MyWork from './components/myWork/MyWork'
import Form from './components/form/Form'

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
        <MyWork />
        <Form />
      </div>
    </div>
  )
}

export default App
