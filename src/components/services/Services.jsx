import React from 'react'
import './Services.css'
import TopDataText from '../sharedComponents/TopDataText'
import Card from '../sharedComponents/Card'
import { GiGlobeRing } from 'react-icons/gi'
import { CgCodeSlash } from 'react-icons/cg'

const Services = () => {
    const cardDataServices = [
        {
            cardheading: "Web Design",
            carddesc: "Web development is a process of builing",
            cardicon: <CgCodeSlash />,
            cardReadMore: true
        },
        {
            cardheading: "Mobile App",
            carddesc: "BSCS from ABC UNI, Master",
            cardicon: <CgCodeSlash />,
            cardReadMore: true
        },
        {
            cardheading: "UI/UX design",
            carddesc: "Build portfolio website.",
            cardicon: <CgCodeSlash />,
            cardReadMore: true
        },
        {
            cardheading: "Graphics Design",
            carddesc: "Build portfolio website.",
            cardicon: <CgCodeSlash />,
            cardReadMore: true
        }
    ]
    return (<div id='services'>
        <div>
            <TopDataText
                topText="What I offer"
                headingText="My Services"
                descText="I am a frontend developer based in Karachi, Pakistan.I am a frontend developer based in Karachi, PakistanI am a frontend developer based in Karachi, Pakistan."
            />
        </div>


        <div className='about-me-bottom-cards-services'>
            {cardDataServices.map((item, index) => {
                return (

                    <   Card
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