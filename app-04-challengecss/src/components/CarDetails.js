import styles from './CarDetails.module.css';

const CarDetails = ({ car }) => {

    function carColor(color) {
        if (color === 'Red')
            return styles.red_label;

        if (color === 'Green')
            return styles.green_label;

        if (color === 'Blue')
            return styles.blue_label;

        return styles.gray_label;
    }

    return (
        <div className={styles.table_line}>
            <p><b>ID:</b> {car.id}</p>
            <p><b>Carro:</b> {car.brand}</p>
            <p><b>Cor:</b> <span className={carColor(car.color)}>{car.color}</span></p>
            <p><b>KM:</b> {car.km}</p>
            <p><b>Novo:</b>
                {car.new ? (<span className={styles.green_label}> Sim</span>) : (<span className={styles.red_label}> Não</span>)}
            </p>
        </div>
    )
}

export default CarDetails