import Button from './Components/Button'
import logo from './Assets/logo.svg';
import './Styles/App.css';

const sum = (a, b) => {
  alert(a + b);
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Olá Mundo FilhadaMãe !!!
        </p>
        <Button onClick={() => sum(10, 5)} name="Carlos Junior" />
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
