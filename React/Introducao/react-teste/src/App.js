// Components
import ButtonCJ from './Components/Button_CJ'
import ButtonTheBoss from './Components/Button_TheBoss'

// Assets
import logo from './Assets/logo.svg';

// Styles
import './Styles/App.css';

const sum = (a, b) => {
  alert(`Idade => ${a + b} anos`);
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Olá Mundo FilhadaMãe !!!
        </p>
        <ButtonCJ onClick={() => sum(20, 11)} name="Carlos Junior" />
        <ButtonTheBoss onClick={() => sum(20, 22)} name="The Boss" />
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
