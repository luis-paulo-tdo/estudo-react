import './App.css';
import { useState } from 'react';

import Universe from './assets/01.jpg';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';

function App() {

  const cars = [
    { id: 1, brand: 'Ferrari', color: 'Amarela', newCar: true, km: 0 },
    { id: 2, brand: 'Kia', color: 'Branca', newCar: false, km: 1000 },
    { id: 3, brand: 'Renault', color: 'Azul', newCar: false, km: 23400 }
  ];

  const users = [
    { id: 1, name: 'Luis', age: 32, job: 'Dev Sr.' },
    { id: 2, name: 'Paulo', age: 24, job: 'Dev Pl.' },
    { id: 3, name: 'Torres', age: 17, job: 'Dev Jr.' },
    { id: 4, name: 'Oliveira', age: 15, job: 'Stag'}
  ];

  const [userName] = useState('Maria');
  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  }

  function showMessage() {
    console.log('Evento do componente pai');
  }

  return (
    <div className="App">
      <h1>Aplicação #3 - Fundamentos Avançados</h1>
      {/* Imagem em public */}
      <div>
        <img src="/01.jpg" alt="Universo #1" width="50%" />
      </div>

      {/* Imagem em assets */}
      <div>
        <img src={Universe} alt="Universo #2" width="50%" />
      </div>
      <ManageData/>
      <ListRender/>
      <ConditionalRender/>

      {/* Props */}
      <ShowUserName name={userName} />

      {/* Destructuring */}
      <CarDetails brand="Volkwagen" km={100000} color="Azul" newCar={false}/>

      {/* Reaproveitamento de Componentes */}
      <CarDetails brand="Ford" km={0} color="Vermelha" newCar={true}/>
      <CarDetails brand="Fiat" km={4000} color="Branca" newCar={false}/>

      {/* Loop em array de objetos */}
      {cars.map(car => (
        <CarDetails key={car.id} brand={car.brand} km={car.km} color={car.color} newCar={car.newCar}/>
      ))}

      {/* Fragments */}
      <Fragment propFragment="Terceiro Título" />

      {/* Children */}
      <Container myValue="Testing #1">
        <p>Este é o conteúdo</p>
      </Container>

      <Container myValue="Testing #2">
        <h5>Este é o conteúdo</h5>
      </Container>

      {/* Executar Função */}
      <ExecuteFunction myFunction={showMessage} />

      {/* State Lift */}
      <Message message={message} />
      <ChangeMessageState handleMessage={handleMessage} />

      {/* Tarefa #4 */}
      {users.map(user => (
        <UserDetails key={user.id} user={user} />
      ))}
    </div>
  );
}

export default App;
