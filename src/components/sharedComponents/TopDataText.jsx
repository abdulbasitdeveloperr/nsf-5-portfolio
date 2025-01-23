import React from 'react';
import './Card.css';

const TopDataText = (props) => {
    return (
        <div>
            <div className='top-data-text'>
                <span>{props.topText}</span>
                <h1>{props.headingText}</h1>
                <p>{props.descText}</p>
            </div>
        </div>
    );
};

export default TopDataText;
