import React from 'react'
import { CgCodeSlash } from 'react-icons/cg'
import './Card.css'

const Card = (props) => {
    return (
        <div className={props.className}>
            <span>{props.cardIcon}</span>

            <h3>{props.cardHeading}</h3>

            <p>{props.cardDescription}</p>

            {props.cardReadMore ? <span>Read More</span> : ""}

        </div>
    )
}

export default Card
