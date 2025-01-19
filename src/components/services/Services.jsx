import React from 'react'
import './Services.css'
import TopDataText from '../sharedComponents/TopDataText'
import Card from '../sharedComponents/Card'
import { GiGlobeRing } from 'react-icons/gi'
import { CgCodeSlash } from 'react-icons/cg'
import { CgWebsite } from "react-icons/cg"
import { SiCircuitverse } from "react-icons/si"
import { IoLogoDesignernews } from "react-icons/io5"

const Services = () => {
    const cardDataServices = [
        {
            cardheading: "Web Design",
            carddesc: "Web development is a process of builing",
            cardicon: <CgWebsite />,
            cardReadMore: true
        },
        {
            cardheading: "UI/UX design",
            carddesc: "Build portfolio website.",
            cardicon: <SiCircuitverse />,
            cardReadMore: true
        },
        {
            cardheading: "Graphics Design",
            carddesc: "Build portfolio website.",
            cardicon: <IoLogoDesignernews />,
            cardReadMore: true
        }
    ]
    return (
        <div>
            <div className="about-me-top">
                <TopDataText
                    topText="What I offer"
                    headingText="My Services"
                    descText="I am a frontend developer based in Karachi, Pakistan"
                />
            </div>


            <div className='about-me-bottom-cards'>
                {cardDataServices.map((item, index) => {
                    return (

                        <Card
                        key={index}
                            cardHeading={item.cardheading}
                            cardDescription={item.carddesc}
                            cardIcon={item.cardicon}
                            className="card-services"
                            cardReadMore={item.cardReadMore}

                        />

                    )
                })}
            </div>
        </div>
    )
}

export default Services
