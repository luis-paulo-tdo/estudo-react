import './App.css';
import CarDetails from './components/CarDetails';

function App() {

  const cars = [
    { id: 1, brand: 'Ferrari', color: 'Red', km: 5000, new: false },
    { id: 2, brand: 'Lamborghini', color: 'Green', km: 0, new: true },
    { id: 3, brand: 'Porsche', km: 15000, color: 'Blue', new: false },
    { id: 4, brand: 'BMW', km: 0, color: 'Gray', new: true }
  ];

  return (
    <div className="App">
      <h1>React com CSS - Exibição de Carros</h1>
      <div className="car_table">
        {
          cars.map(car => (
            <CarDetails key={car.id} car={car} />
          ))
        }
      </div>
    </div>
  );
}

export default App;
