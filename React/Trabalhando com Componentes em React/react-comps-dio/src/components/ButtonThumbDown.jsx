import React from 'react'

const ButtonThumbDown = (props) => {

    const { text, children, onClick, className } = props

    return (
        <button type="button" onClick={onClick} class="btn btn-outline-danger" >{text}
            &nbsp;<img src="https://img.icons8.com/material-rounded/24/000000/thumbs-down.png" />&nbsp;{children}</button >
    )

}

export default ButtonThumbDown

