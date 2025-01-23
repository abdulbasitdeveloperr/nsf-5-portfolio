import React from 'react'
import './MyWork.css'
import TopDataText from '../sharedComponents/TopDataText'
import Card from '../sharedComponents/Card'
import picture from '../../assets/images.png'
import { BsArrowBarRight } from 'react-icons/bs'
import { CgCodeSlash } from 'react-icons/cg'
import image2 from '../../assets/web design.jpeg'
import image1 from '../../assets/web devlopment.png'
import image3 from '../../assets/destop.png'

const MyWork = () => {
    const cardDataLatestWork = [
        {
            image: image1,
            latestWorkCard: true,
            latestWorkCardHeading: "Web Development"
        },
        {
            latestWorkCard: true,
            image: image2,
            latestWorkCardHeading: "App Dev"
        },
       ,
        {
            latestWorkCard: true,
            image: image3,
            latestWorkCardHeading: "Destop Apps"
        }
    ]
    return (
        <div>
            <div>
                <TopDataText
                    topText="My portfolio"
                    headingText="My Latest Work"
                    descText="Welcome to my web portfolio Welcome to my web portfolio Welcome to my web portfolio"
                />
            </div>
            <div className='about-me-bottom-cards-services'>
                {cardDataLatestWork.map((item, index) => {
                    return (
                        <Card
                            image={item.image}
                            latestWorkCard={item.latestWorkCard}
                            latestWorkCardHeading={item.latestWorkCardHeading}
                            latestWorkSubHeadig="Web Design"
                            latestWorkIcon={<BsArrowBarRight />}
                        />
                    )
                })}
            </div>
        </div>
    )
}
export default MyWork