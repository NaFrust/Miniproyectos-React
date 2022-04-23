import React from 'react';
import '../stylesheets/Pantalla.css';
// usamos una funcion flecha, se suele usar para componentes sencillos
const Pantalla = ({ input }) =>(
// despues de la flecha vienen () y no {}
<div className='input'>
  {input}
</div>
);

export default Pantalla