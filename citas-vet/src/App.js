import { Fragment, useState, useEffect } from 'react'
import Formulario from './components/Formulario';
import Cita from './components/Cita';
import PropTypes from 'prop-types';



function App() {
  // citas en local storage
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if(!citasIniciales){
    citasIniciales = [];
  }
  
  // arreglo citas
  const [citas, setCitas] = useState(citasIniciales);

  // useEffect para realizar ciertas operaciones cuando el state cambio
  useEffect(()=>{
    if(citasIniciales){
      localStorage.setItem('citas',JSON.stringify(citas));
    }else{
      localStorage.setItem('citas',JSON.stringify([]));
    }
  },[citas, citasIniciales]);

  // funcion que tome las citas actuales y agregue la nueva
  const crearCita = cita =>{
    setCitas([...citas, cita])
  }

  // funcion que elemina una cita por su id
  const eliminarCita = id =>{
    const nuevasCitas = citas.filter(cita=> cita.id !== id);
    setCitas(nuevasCitas);
  }

  // mensaje condicional
  const titulo = citas.length === 0 ? 'No hay citas pendientes' : 'Citas pendientes';

  return (
    <Fragment>
      <h1>Administrador de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className='one-half column'>
            <Formulario 
              crearCita={crearCita}
            />
          </div>  
          <div className='one-half column'>
          <h2>{titulo}</h2>
          {citas.map(cita => (
            <Cita 
            key={cita.id}
            cita={cita}
            eliminarCita={eliminarCita}
            />
          ))}
          </div>  
        </div>
      </div>
    </Fragment>

  );
}

Formulario.propTypes ={
  crearCita: PropTypes.func.isRequired  
}



export default App;
