import React from 'react'

const ButtonThumbUp = (props) => {

    const { text, children, onClick, className } = props

    return (
        <button type="button" onClick={onClick} class="btn btn-outline-success" >{text}
            &nbsp;<img src="https://img.icons8.com/material-rounded/24/000000/facebook-like.png" />&nbsp;{children}</button >
    )

}

export default ButtonThumbUp

