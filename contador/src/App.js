import './App.css';
import logofreecode from './assets/FreeCodeCamp_logo.png';
import Boton from './components/Boton';

function App() {
  const hacerClic = () =>{
    console.log('Click!')  
  }

  const reiniciarContador = () => {
    console.log('Reiniciado')
  }




  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img className="freecodecamp-logo" src={logofreecode} alt="Logo freeCodeCamp" />
      </div>
      <div className='contenedor-principal'>
        <Boton 
        texto="Click" 
        esBotonDeClic={true} 
        manejarClic={hacerClic} />
        <Boton 
        texto="Reiniciar"
         esBotonDeClic={false} 
         manejarClic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
