import ItemLista from './components/ItemLista'
import Card from './components/Card'

const App = () => {
  return (

    <div className="App">
      <h1>Aplicação de Componentes com React</h1>
      <ItemLista text='Item 1' />
      <ItemLista text='Item 2' />
      <ItemLista text='Item 3' />
      <Card title='Card' subtitle='Type = Component'
        text='Component card extracted from Bootstrap Framework'
        buttonText='Click here if you enjoyed =D' />
    </div>

  );
};

export default App;
