import './App.css';
import MyComponent from './components/MyComponent';

function App() {
  return (
    <div className="App">
      {/* CSS Global */}
      <h1>React com CSS</h1>

      {/* CSS de Componente */}
      <MyComponent />
      <p>Paráfrago do App.js</p>

      {/* Inline CSS */}
      <p style={{ color: 'blue', padding: '5px', border: '1px solid black', width: '30%', margin: '0 auto' }}>
        Parágrafo estilizado inline
      </p>
    </div>
  );
}

export default App;
