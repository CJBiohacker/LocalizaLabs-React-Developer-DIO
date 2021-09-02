import React, { Component } from 'react';
import logo from './assets/logo.svg';
import './styles/App.css';

// Constante arrow function com elementos JSX pra lançar na página App.js
const jsx = () => {

  const soma = (a, b) => {
    return a + b;
  };

  return (
    <div>
      <h1>Olá Mundo Filha da Mãe</h1>
      <p>Meu nome é Carlos Junior e a soma entre 2 e 5 é igual a {soma(2, 5)}</p>
    </div>
  )
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>App de Teste do React</h2>
        </div>
        <p className="App-intro">
          {jsx()}
        </p>
      </div>
    );
  }
}

export default App;
