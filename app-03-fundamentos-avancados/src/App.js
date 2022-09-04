import './App.css';

import Universe from './assets/01.jpg';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';

function App() {
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
    </div>
  );
}

export default App;
