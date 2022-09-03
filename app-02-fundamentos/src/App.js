// Componentes
import FirstComponent from './components/FirstComponent';
import MyComponent from './components/MyComponent';
import TemplateExpressions from './components/TemplateExpressions';
import Events from './components/Events';

// Styles / CSS
import './App.css';


function App() {
  return (
    <div className="App">
      <h1>Fundamentos de React</h1>
      <FirstComponent/>
      <TemplateExpressions/>
      <MyComponent/>
      <Events/>
    </div>
  );
}

export default App;
