const CarDetails = ({ brand, km, color}) => {
  return (
    <div>
        <h2>Detalhes do Carro</h2>
        <ul>
            <li><b>Marca:</b> {brand}</li>
            <li><b>KM:</b> {km}</li>
            <li><b>Cor:</b> {color}</li>
        </ul>
    </div>
  )
}

export default CarDetails