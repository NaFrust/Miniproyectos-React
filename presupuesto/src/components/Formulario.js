import React, {useState} from 'react'
import Error from './Error';

function Formulario() {
  const [nombreGasto, setNombreGasto] = useState('');
  const [cantidad, setCantidad] = useState(0);
  const [error,setError ] = useState(false);


  // cuando el usuario agrega un gasto
  const agregarGasto = e =>{
    e.preventDefault();
    // validad
    if(cantidad <1 || isNaN(cantidad) || nombreGasto.trim() === '' ){
      setError(true);
      return;
    }
    // construirlo
    // pasarlo al parent
    // resetear el form
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
          value={nombreGasto}
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

export default Formulario