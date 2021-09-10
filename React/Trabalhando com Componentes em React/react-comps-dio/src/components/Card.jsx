import React from 'react'
import { useState } from 'react'

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
                    <span className='buttons'>
                        <button type="button"
                            className="btn btn-outline-success"
                            onClick={Like}>{greenButtonText} <img src="https://img.icons8.com/material-rounded/24/000000/facebook-like--v1.png" /> {greenValue}</button>
                        <button type="button"
                            className="btn btn-outline-danger"
                            onClick={Dislike}>{redButtonText} <img src="https://img.icons8.com/material-rounded/24/000000/thumbs-down.png" /> {redValue}</button>
                    </span>
                </div>
            </div>
        </div>

    )
}

export default Card