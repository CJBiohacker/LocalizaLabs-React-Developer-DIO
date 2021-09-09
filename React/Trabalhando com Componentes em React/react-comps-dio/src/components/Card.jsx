import React from 'react'

const Card = (props) => {

    const { title, subtitle, text, buttonText } = props

    return (

        <div class="card">
            <h5 class="card-header">{title}</h5>
            <div class="card-body">
                <h5 class="card-title">{subtitle}</h5>
                <p class="card-text">{text}</p>
                <a href="#" class="btn btn-primary">{buttonText}</a>
            </div>
        </div>

    )
}

export default Card