import './App.css';
import Car from './components/Car';
import MyComponent from './components/MyComponent';
import Title from './components/Title';

function App() {
  let n = 10;
  let redTitle = true;

  const myCars = [
    {name:"Fusca",km:10000,color:"Branca"},
    {name:"Polo",km:3200,color:"Cinza"},
    {name:"Onix",km:0,color:"Preto"},
  ]

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

      {/*CSS inline dinâmico */}
      <h2 style={{ color: n < 10 ? "purple" : "pink" }}>CSS dinâmico</h2>

       {/*CSS inline dinâmico */}
       <h2 style={{ color: n > 10 ? "purple" : "pink" }}>CSS dinâmico</h2>

       {/*CSS inline dinâmico */}
       <h2 style={ n =10 ? {color:"green"} : {color:"yellow"} }>CSS dinâmico</h2>

       {/*Classes dinâmicas*/}
       <h2 className={redTitle? "red-title":"title"}>Este título vai ter classe dinâmica</h2>

       {/*CSS Modules
       Alternativa muito interessante quando queremos restringir o css por componente. Pois o css é único por componente.*/}
       <Title/>

       {/*Desafio CSS */}
       <hr />
       <h1>ShowRooms de Carros</h1>
       <div className="carContainer">
        {myCars.map((car) =>(
          <Car car={car}/>
        ))}
       </div>
    </div>
  );
}

export default App;
