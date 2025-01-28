
import React from 'react';
import './AboutMe.css';
import aboutMeImage from '../../assets/images.png';
import Card from '../sharedComponents/Card';
import { BiCodeAlt } from 'react-icons/bi';
import { CgCodeSlash } from 'react-icons/cg';
import { VscVscode } from 'react-icons/vsc';
import { IoGitMerge, IoLogoFigma, IoLogoFirebase } from 'react-icons/io5';
import { DiMongodb } from 'react-icons/di';
import { GrProjects } from "react-icons/gr";
import { FaGraduationCap } from "react-icons/fa";

const AboutMe = () => {

    const cardData = [
        {
            cardheading: "Languages",
            carddesc: "HTML5, CSS3, JS, REACTJS",
            cardicon: <CgCodeSlash />
        },
        {
            cardheading: "Education",
            carddesc: "Intermediate from Master College",
            cardicon: <FaGraduationCap />
        },
        {
            cardheading: "Projects",
            carddesc: "Build portfolio website.",
            cardicon: <GrProjects />
        }
    ];

    const toolsIcons = [
        <VscVscode size={45} color='blue' />,
        <IoLogoFirebase size={45} color='yellow' />,
        <DiMongodb size={45} color='green' />,
        <IoLogoFigma size={45} color='lightblue' />,
        <IoGitMerge size={45} color='red' />
    ];

    return (
        <div className='about-me' id='aboutme'>
            <div className='about-me-top'>
                <span>Introduction</span>
                <h1>About Me</h1>
            </div>

            <div className='about-me-bottom'>
                <div className='about-me-bottom-image'>
                    <img src={aboutMeImage} className='about-me-image' alt="About Me" />
                </div>

                <div className='about-me-bottom-right'>
                    <p>"I am a passionate Front-End Developer, dedicated to creating visually appealing and user-friendly websites using the latest technologies like React and Vite."</p>

                    <div className='about-me-bottom-cards'>
                        {cardData.map((item, index) => {
                            return (
                                <Card
                                    key={index}
                                    cardHeading={item.cardheading}
                                    cardDescription={item.carddesc}
                                    cardIcon={item.cardicon}
                                    className="card"
                                />
                            );
                        })}
                    </div>

                    <span>Tools I use</span>

                    <div className='about-me-bottom-tools-container'>
                        {toolsIcons.map((item, index) => (
                            <span key={index} className='about-me-bottom-tools'>
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
