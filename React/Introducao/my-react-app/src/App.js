import logo from './logo.svg';
import './App.css';

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

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
