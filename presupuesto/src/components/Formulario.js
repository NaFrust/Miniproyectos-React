import React, {useState} from 'react'
import Error from './Error';
import shortid from 'shortid';

import PropTypes from 'prop-types';


function Formulario({ setGasto,setCrearGasto }) {
  const [nombre, setNombreGasto] = useState('');
  const [cantidad, setCantidad] = useState(0);
  const [error,setError ] = useState(false);


  // cuando el usuario agrega un gasto
  const agregarGasto = e =>{
    e.preventDefault();
    // validad
    if(cantidad <1 || isNaN(cantidad) || nombre.trim() === '' ){
      setError(true);
      return;
    }
    setError(false);
    // construirlo
    const gasto = {
      nombre,
      cantidad,
      id:   shortid.generate()
    }
    // pasarlo al parent
    setGasto(gasto);
    setCrearGasto(true);
    // resetear el form
    setNombreGasto('');
    setCantidad(0);
  }
  return (
    <form
    onSubmit={agregarGasto}
    >
      <h2>Agregar gastos</h2>
      {error ? <Error mensaje='Ambos campos son obligatorios o Presupuesto incorrecto' /> : null}
      <div className='campo'>
        <label>Nombre Gasto</label>
        <input 
          type='text'
          className='u-full-width'
          placeholder='Ej. Comida'
          value={nombre}
          onChange={ e => setNombreGasto(e.target.value)}
        />
      </div>
      <div className='campo'>
        <label>Cantidad Gasto</label>
        <input 
          type='number'
          className='u-full-width'
          placeholder='Ej. 100'
          value={cantidad}
          onChange={e => setCantidad(parseInt(e.target.value,10))}
        />
      </div>
      <input 
        type='submit'
        className='button-primary u-full-width'
        value='Agregar Gasto'
      />

    </form>
  )
}

Formulario.propTypes = {
  setGasto: PropTypes.func.isRequired,
  setCrearGasto: PropTypes.func.isRequired
}

export default Formulario