import React from 'react';
import './HeroSection.css';
import { MdWavingHand } from 'react-icons/md';
import profilePicture from '../../assets/images.png';
import resumePDF from '../../assets/resume.jpg';  // Import resume from assets folder

const HeroSection = () => {
    
    // Function to scroll to the contact form
    const scrollToContact = () => {
        const section = document.getElementById("contactme");
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Function to open resume in a new tab
    const handleResumeClick = () => {
        window.open(resumePDF, '_blank'); 
    };

    return (
        <div className='hero-section' id='home'>
            {/* Profile Picture Section */}
            <div className='hero-section-top'>
                <div className='hero-section-top-image'>
                    <img src={profilePicture} className='profile-image' alt="Profile" />
                </div>
                <span className='hero-section-top-text'>
                    Hi! I'm Abdul Basit  
                    <MdWavingHand size={38} color='#E5D0AC' className='waving-hand'/>
                </span>
            </div>

            {/* Introduction Section */}
            <div className='hero-section-middle'>
                <h1 className='hero-section-middle-heading'>
                    Frontend Web Developer based in Karachi.
                </h1>
                <p className='hero-section-middle-desc'>
                    I am a frontend developer from Karachi, Pakistan with 1 year of experience in multiple projects.
                </p>
            </div>

            {/* Buttons Section */}
            <div className='hero-section-bottom'>
                <button className='hero-section-bottom-buttons' onClick={scrollToContact}>
                    Contact Me
                </button>
                <button className='hero-section-bottom-buttons' onClick={handleResumeClick}>
                    My Resume
                </button>
            </div>
        </div>
    );
};

export default HeroSection;
