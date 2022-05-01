import './App.css';
import ListaDeTareas from './components/ListaDeTareas';
import LogoFreecodecamp from './components/LogoFreecodecamp';




function App() {
  return (
    <div className="App">
      <LogoFreecodecamp />
      <div className='tareas-lista-principal'>
        <h1>Mis tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
