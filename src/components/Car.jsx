import Styles from "./Car.module.css"

const Car = ({car}) => {
  return (
    <div className={Styles.card}>
        <h1>{car.name}</h1>
        <p>Km: {car.km}</p>
        <p>Cor: {car.color}</p>

    </div>
  )
}

export default Car