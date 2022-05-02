import React, { useState } from 'react'
import {v4 as uuid} from 'uuid'

function Formulario({ crearCita }) {

  const [cita,setCita] = useState({
    mascota:'',
    propietario:'',
    fecha:'',
    hora:'',
    motivo:''
    });

  const [error, setError] = useState(false)  


// funcion que se ejecuta cuando el usuario escribe en el input
    const handleCita = e =>{
      setCita({
        ...cita,
        [e.target.name] : e.target.value
      })
    }
// extraer los valores
    const {mascota, propietario, fecha, hora, motivo} = cita;
// cuando el usuario agrega cita
const submitCita = e =>{
  e.preventDefault();
  // validar
  if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || motivo.trim() === '' ){
    setError(true);
    return;
  }

  // eliminar el errorprevio
  setError(false);
  // asignar un id
  cita.id = uuid();
  // crear la cita
  crearCita(cita)
  // reinciar form
  setCita({mascota:'',
  propietario:'',
  fecha:'',
  hora:'',
  motivo:''
  })
}



  return (
    <>
      <h2>Crear Cita</h2>
      {error? <p className='alerta-error'> Todos los campos son obligatorios </p> : null}

      <form
        onSubmit={submitCita}
      >
        <label>Nombre Mascota</label>
        <input
          type='text'
          name='mascota'
          className='u-full-width'
          placeholder='Nombre Mascota'
          onChange={handleCita}
          value={mascota}
        />
        <label>Nombre Dueño</label>
        <input
          type='text'
          name='propietario'
          className='u-full-width'
          placeholder='Nombre dueño de la mascota'
          onChange={handleCita}
          value={propietario}
        />
        <label>Fecha cita</label>
        <input
          type='date'
          name='fecha'
          className='u-full-width'
          onChange={handleCita}
          value={fecha}
        />
        <label>Hora cita</label>
        <input
          type='time'
          name='hora'
          className='u-full-width'
          onChange={handleCita}
          value={hora}
        />
        <label>Motivo</label>
        <textarea
        className='u-full-width'
        name='motivo'
        onChange={handleCita}
        value={motivo}
        ></textarea>

        <button 
        type='submit'
        className='u-full-width button-primary'
        >Agregar Cita</button>

      </form>
    </>

  )
}

export default Formulario