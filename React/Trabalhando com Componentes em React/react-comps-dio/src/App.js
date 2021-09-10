import ItemLista from './components/ItemLista'
import Card from './components/Card.jsx'

const App = () => {
  return (

    <div className="App">
      <h1>Aplicação de Componentes com React</h1>
      <ItemLista text='Item 1' />
      <ItemLista text='Item 2' />
      <ItemLista text='Item 3' />
      <Card title='Card' subtitle='Type = Component'
        text='Component card extracted from Bootstrap Framework'
        greenButtonText='Click here if you enjoyed' redButtonText="Or click here if you're EVIL" />
    </div>

  );
};

export default App
