import React from 'react'
import { useState } from 'react'
import ButtonThumbDown from './ButtonThumbDown';
import ButtonThumbUp from './ButtonThumbUp';

import '../styles/Card.css'

const Card = (props) => {

    const [greenValue, setGreenValue] = useState(0)
    const [redValue, setRedValue] = useState(0)

    const Like = () => {
        setGreenValue(greenValue + 1)
    }

    const Dislike = () => {
        setRedValue(redValue - 1)
    }

    const { title, subtitle, text, greenButtonText, redButtonText } = props

    return (

        <div className="card">
            <h5 className="card-header">{title}</h5>
            <div id='card-container'>
                <div className="card-body">
                    <h5 className="card-title">{subtitle}</h5>
                    <p className="card-text">{text}</p>
                    <span className="buttons">
                        <ButtonThumbUp onClick={Like} text={greenButtonText} children={greenValue} />
                        <ButtonThumbDown onClick={Dislike} text={redButtonText} children={redValue} />
                    </span>
                </div>
            </div>
        </div>

    )
}

export default Card