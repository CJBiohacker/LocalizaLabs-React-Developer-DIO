import React from 'react'

const ButtonCJ = (props) => {

    const { name, onClick } = props                     // Desestruturação pra atribuir 2 atributos pra constante 'props' que será um callback do componente 'Button'.

    return (
        <button onClick={onClick}>{name}</button>       // Chamada da propriedade 'onClick' da tag button, pra passar o atributo 'onClick' como funcionalidade de clicar e 'name' como informação.
    )
}

export default ButtonCJ
