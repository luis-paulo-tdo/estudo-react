// Componentes
import FirstComponent from './components/FirstComponent';
import MyComponent from './components/MyComponent';
import TemplateExpressions from './components/TemplateExpressions';

// Styles / CSS
import './App.css';


function App() {
  return (
    <div className="App">
      <h1>Fundamentos de React</h1>
      <FirstComponent/>
      <TemplateExpressions/>
      <MyComponent/>
    </div>
  );
}

export default App;
