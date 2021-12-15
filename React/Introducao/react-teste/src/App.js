// Components
import ButtonCJ from './Components/Button_CJ';
import ButtonTheBoss from './Components/Button_TheBoss';

// Assets
import logo from './Assets/logo.svg';

// Styles
import './Styles/App.css';

const numbers = [1, 2, 3, 4, 5];

const condition = true;

const sum = (a, b) => {
  alert(`Idade => ${a + b} anos`);
}

const ifTheBoss = () => {
  return (
    <ButtonTheBoss onClick={() => sum(20, 22)} name="The Boss" />
  )
}

const ifCJ = () => {
  return (
    <ButtonCJ onClick={() => sum(20, 11)} name="Carlos Junior" />
  )
}

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Clique nos botões para saber a idade:</p>

        {condition ? ifCJ() : ifTheBoss()}              {/* If Ternário para selecionar qual dos botões fica oculto. Condition: True => Botão CJ visível / False => Botão TheBoss visível */}

      </header>
    </div>
  );
};

export default App;
