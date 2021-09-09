import React from 'react'

const ItemLista = (props) => {

    const { text } = props

    return (

        <ul class="list-group">
            <a href="#" className="list-group-item list-group-item-action list-group-item-info">{text}</a>
        </ul>

    )
}

export default ItemLista