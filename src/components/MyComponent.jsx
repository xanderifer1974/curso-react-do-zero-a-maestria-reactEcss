import "./MyComponent.css"

const MyComponent = () => {
  return (
    <div>
        <h1>CSS de Component</h1>
        <p>Este é o parâgrafo do component</p>
        <p className="my-comp-paragraph">Este ó o parágrafo que regra css estilizada para não vazar para outro componente.</p>
    </div>
  )
}

export default MyComponent