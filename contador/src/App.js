import './App.css';
import logofreecode from './assets/FreeCodeCamp_logo.png';
import Boton from './components/Boton';
import Contador from './components/Contador';
import { useState } from 'react';

function App() {

  const [numeroClics, setNumeroClics] = useState(0);

  const hacerClic = () =>{
    setNumeroClics(numeroClics + 1); 
  };

  const reiniciarContador = () => {
    setNumeroClics(0);
  };




  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img className="freecodecamp-logo" src={logofreecode} alt="Logo freeCodeCamp" />
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numeroClics}/>
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
