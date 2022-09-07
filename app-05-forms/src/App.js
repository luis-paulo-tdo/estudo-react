import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <h1>Formulários em React</h1>
      <MyForm user={{ name: 'Josias', email: 'josias@gmail.com', bio: 'Sou advogado!', role: 'editor' }} />
    </div>
  );
}

export default App;
