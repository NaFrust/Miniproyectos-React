import React from 'react'
import '../stylesheets/Testimonio.css';

function Testimonio(props) {
  return (
    <div className='contenedor-testimonio' >
      <img 
      src={require(`../assets/testimonio-${props.imagen}.png`)} 
      className='imagen-testimonio' 
      alt={`foto de ${props.imagen}`}/>
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>
          <strong>{props.nombre}</strong> en {props.pais}</p>
        <p className='cargo-testimonio'>
          {props.cargo} en <strong>{props.empresa}</strong></p>
        <p className='texto-testimonio'>"{props.testimonio}"</p>
      </div>
    </div>
    
  )
}

export default Testimonio