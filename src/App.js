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

      {/*Inline CSS 
      Este tipo de regra precisa ser evitado, mais para nivel de conhecimento foi mostrado*/}
      <p style={{color:"blue", padding:"25px", borderTop:"15px solid red"}}>Este elemento foi estilizado de forma inline</p>
    </div>
  );
}

export default App;
