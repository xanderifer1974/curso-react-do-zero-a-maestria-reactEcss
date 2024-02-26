import './App.css';
import MyComponent from './components/MyComponent';

function App() {
  return (
    <div className="App">
      {/* CSS Global */}
      <h1>React com CSS</h1>

      <p>Este é o parágrafo do APP.js. Houve conflito com a regra do componente MyComponent</p>
      {/* CSS de componente */}      
      <MyComponent/>
    </div>
  );
}

export default App;
