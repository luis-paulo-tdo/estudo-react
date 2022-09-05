import './App.css';
import { useState } from 'react';

import Universe from './assets/01.jpg';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';

function App() {

  const name = "Joaquim";
  const [userName] = useState('Maria');

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
      {/* Destructuring} */}
      <CarDetails brand="Volkwagen" km={100000} color="Azul"/>
    </div>
  );
}

export default App;
