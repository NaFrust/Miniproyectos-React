import React from 'react'
import PropTypes from 'prop-types';

const cita = ({cita, eliminarCita}) => (
  <div className='cita'>
    <p>Mascota: <span>{cita.mascota}</span></p>
    <p>Dueño: <span>{cita.propietario}</span></p>
    <p>Fecha: <span>{cita.fecha}</span></p>
    <p>Hora: <span>{cita.hora}</span></p>
    <p>Motivo: <span>{cita.motivo}</span></p>

    <button
      className='button eliminar u-full-width'
      onClick={()=> eliminarCita(cita.id)}
    >Eliminar &times;</button>
  </div>
);

cita.propTypes ={
  cita: PropTypes.object.isRequired,
  eliminarCita: PropTypes.func.isRequired
}

export default cita