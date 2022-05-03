import React, { Fragment, useState } from 'react'
import Error from './Error';

function Pregunta({setPresupuesto, setRestante, setPregunta}) {
  
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false)

  const definirPresupuesto = e => {
    setCantidad(parseInt(e.target.value,10))
  } 

  // submit
  const agregarPresupuesto = e => {
    e.preventDefault();
    //Validar 
    if(cantidad < 1 || isNaN( cantidad )){
      setError(true);
      return;
    }
    // si pasa la validacion
    setError(false);
    setPresupuesto(cantidad);
    setRestante(cantidad)
    setPregunta(false);
  }

  
  return (
    <Fragment>
      <h2>Coloca tu Presupuesto</h2>
      {error ? <Error mensaje='El presupuesto es Incorrecto' /> : null}
      <form
      onSubmit={agregarPresupuesto}
      >
        <input 
          type='number'
          className='u-full-width'
          placeholder='Coloca tu presupuesto'
          onChange={definirPresupuesto}
        />

        <input 
          type='submit'
          className='button-primary u-full-width'
          value='Definir Presupuesto'
        />
      </form>
    </Fragment>
  )
}

export default Pregunta