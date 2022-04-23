import React from 'react';
import './App.css';
import logoFreecode from './assets/FreeCodeCamp_logo.png'
import Boton from './components/Boton';
import BotonClear from './components/BotonClear';
import Pantalla from './components/Pantalla';
import { evaluate } from 'mathjs';

import { useState }  from 'react';

function App() {

  const [input, setInput] = useState('');

  const agregarInput = valor =>{
    setInput(input + valor);
  };

  const calcularResultado = () => {
    if(input) {
      setInput(evaluate(input));
    } else {
      alert('Por favor ingresar valores')
    }
    
  };


  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img src={logoFreecode}
        className='freecodecamp-logo'
        alt='logo de freecodecamp' />
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input={input} />
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}>
            Clear
          </BotonClear>
          
        </div>

      </div>
    </div>
  );
}

export default App;
