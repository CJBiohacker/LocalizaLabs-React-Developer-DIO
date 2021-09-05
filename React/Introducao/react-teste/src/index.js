import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const idRoot = document.getElementById('root');                               // Atribui o método DOM 'getElementById' à uma constante chamada 'idRoot'.

ReactDOM.render(<React.StrictMode><App /></React.StrictMode>, idRoot);         // Chamada da constante 'idRoot' para renderização de toda atualização no arquivo 'App.js' seja lançada na página HTML em tempo real (S.P.A.).

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
