// import React from 'react'
// import './Services.css'
// import TopDataText from '../sharedComponents/TopDataText'
// import Card from '../sharedComponents/Card'
// import { GiGlobeRing } from 'react-icons/gi'
// import { CgCodeSlash } from 'react-icons/cg'
// import { CgWebsite } from "react-icons/cg"
// import { SiCircuitverse } from "react-icons/si"
// import { IoLogoDesignernews } from "react-icons/io5"

// const Services = () => {
//     const cardDataServices = [
//         {
//             cardheading: "Web Design",
//             carddesc: "Web development is a process of builing",
//             cardicon: <CgWebsite />,
//             cardReadMore: true
//         },
//         {
//             cardheading: "UI/UX design",
//             carddesc: "Build portfolio website.",
//             cardicon: <SiCircuitverse />,
//             cardReadMore: true
//         },
//         {
//             cardheading: "Graphics Design",
//             carddesc: "Build portfolio website.",
//             cardicon: <IoLogoDesignernews />,
//             cardReadMore: true
//         }
//     ]
//     return (
//         <div>
//             <div className="about-me-top">
//                 <TopDataText
//                     topText="What I offer"
//                     headingText="My Services"
//                     descText="As a fresher, I offer services that reflect my passion and dedication to continuous learning. I specialize in [mention your key skills, e.g., web development, graphic design, or writing] and have hands-on experience through personal projects and academic work. I am eager to take on new challenges, deliver quality results, and grow with every opportunity."
//                 />
//             </div>


//             <div className='about-me-bottom-cards'>
                
//                 {cardDataServices.map((item, index) => {
//                     return (

//                         <Card
//                         key={index}
//                             cardHeading={item.cardheading}
//                             cardDescription={item.carddesc}
//                             cardIcon={item.cardicon}
//                             className="card-services"
//                             cardReadMore={item.cardReadMore}

//                         />

//                     )
//                 })}
//             </div>
//         </div>
//     )
// }

// export default Services
import React from 'react';
import './Services.css';
import TopDataText from '../sharedComponents/TopDataText';
import Card from '../sharedComponents/Card';
import { GiGlobeRing } from 'react-icons/gi';
import { CgCodeSlash } from 'react-icons/cg';
import { IoLogoDesignernews } from "react-icons/io5";
import { SiCircuitverse } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";


const Services = () => {
    const cardDataServices = [
        {
            cardheading: "Web Design",
            carddesc: "Web development is a process of building.",
            cardicon: <CgWebsite />,
            cardReadMore: true,
        },
        // {
        //     cardheading: "Mobile App",
        //     carddesc: "I specialize in mobile app development.",
        //     cardicon: <GiGlobeRing />,
        //     cardReadMore: true,
        // },
        {
            cardheading: "UI/UX Design",
            carddesc: "Crafting user-friendly interfaces.",
            cardicon: <SiCircuitverse />,
            cardReadMore: true,
        },
        {
            cardheading: "Graphics Design",
            carddesc: "Creating visually appealing designs.",
            cardicon: <IoLogoDesignernews />,
            cardReadMore: true,
        },
    ];

    return (
        <div>
            <TopDataText
                topText="What I Offer"
                headingText="My Services"
                descText="'As a fresher, I offer services that reflect my passion and dedication to continuous learning. I specialize in [mention your key skills, e.g., web development, graphic design, or writing] and have hands-on experience through personal projects and academic work. I am eager to take on new challenges, deliver quality results, and grow with every opportunity.'"
            />
            <div className="about-me-bottom-cards">
                <div className="about-me-bottom-cards-services">
                    {cardDataServices.map((item, index) => (
                        <Card
                            key={index} // Important for list rendering
                            cardHeading={item.cardheading}
                            cardDescription={item.carddesc}
                            cardIcon={item.cardicon}
                            className="card-services"
                            cardReadMore={item.cardReadMore}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
