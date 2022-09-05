const CarDetails = ({ brand, km, color, newCar}) => {
  return (
    <div>
        <h2>Detalhes do Carro</h2>
        <ul>
            <li><b>Marca:</b> {brand}</li>
            <li><b>KM:</b> {km}</li>
            <li><b>Cor:</b> {color}</li>
        </ul>
        {newCar && <p>Este carro é novo</p>}
    </div>
  )
}

export default CarDetails