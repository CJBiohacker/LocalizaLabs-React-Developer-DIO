import React from "react"
import { ReactDOM } from "react"
import "./style.css"

function JSX() {
    return (
        <div>
            Carlos Junior
        </div>
    )
}

const ReactApp = () => {

    return (
        <div className="App">
            Hello React FELADAMÃE !!!
        </div>
    )
}

const rootElement = document.getElementById("root")                     // Constante que tem valor atribuído ao método DOM 'document.getElementById()'. Toda menção à esta 'const' vai jogar alguma informação para a '<div id="root">' da página 'index.html'.  
ReactDOM.render(<ReactApp />, rootElement)                              // Renderiza um elemento do React no DOM e retorna uma referência ao componente. Neste caso, tudo que faz parte da arrow function 'React App', será lançada à página 'index.html'.     