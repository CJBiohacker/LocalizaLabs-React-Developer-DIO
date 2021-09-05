import React from 'react';
import ReactDOM from 'react-dom';

import './Styles/index.css';
import App from './App';

const idRoot = document.getElementById('root');                               // Atribui o método DOM 'getElementById' à uma constante chamada 'idRoot'.

ReactDOM.render(<React.StrictMode><App /></React.StrictMode>, idRoot);        // Chamada da constante 'idRoot' para renderização de toda atualização no arquivo 'App.js' seja lançada na página HTML em tempo real (S.P.A.).
