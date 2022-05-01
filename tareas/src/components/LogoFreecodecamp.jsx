import React from 'react'
import '../style/LogoFreecodecamp.css';
import FreecodecampLogo from '../assets/FreeCodeCamp_logo.png';

function LogoFreecodecamp() {
  return (
    <div className="freecodecamp-logo-contenedor">
      <img
        src={FreecodecampLogo}
        className='freecodecamp-logo'
        alt='Logo Freecodecamp'
      />
    </div>
  )
}

export default LogoFreecodecamp