import React from 'react'
import './Card.css'

const TopDataText = (props) => {
    return (
        <div>
            <span>{props.topText}</span>

            <h1>{props.headingText}</h1>

            <p>{props.descText}</p>
        </div>
    )
}

export default TopDataText
