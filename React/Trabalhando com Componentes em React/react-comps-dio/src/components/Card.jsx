import React from 'react'

import '../styles/Card.css'

const Card = (props) => {

    const { title, subtitle, text, greenButtonText, redButtonText } = props

    return (

        <div class="card">
            <h5 class="card-header">{title}</h5>
            <div id='card-container'>
                <div class="card-body">
                    <h5 class="card-title">{subtitle}</h5>
                    <p class="card-text">{text}</p>
                    <span class='buttons'>
                        <button type="button" class="btn btn-outline-success">{greenButtonText}</button>
                        <button type="button" class="btn btn-outline-danger">{redButtonText}</button>
                    </span>
                </div>
            </div>
        </div>

    )
}

export default Card