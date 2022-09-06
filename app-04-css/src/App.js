import './App.css';
import { useState } from 'react';
import MyComponent from './components/MyComponent';

function App() {

  const numberIndex = 9;
  const [name] = useState('Matheus');
  const [redTitle] = useState(false);

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

      {/* CSS Inline Dinâmico */}
      <p style={numberIndex < 10 ? ({color: 'purple'}) : ({color: 'gray'})}>CSS Dinâmico #1</p>
      <p style={numberIndex >= 10 ? ({color: 'purple'}) : ({color: 'gray'})}>CSS Dinâmico #2</p>
      <p style={name === 'Matheus' ? ({color: 'green'}) : null}>CSS Dinâmico #3</p>

      {/* Classes Dinâmicas */}
      <p className={ redTitle ? 'red-title' : 'title' }>Texto estilizado com classe dinâmica</p>
    </div>
  );
}

export default App;
