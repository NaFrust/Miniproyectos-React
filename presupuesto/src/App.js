import Pregunta from "./components/Pregunta";
import { useState,useEffect } from 'react';
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import ControlPresupuesto from "./components/ControlPresupuesto";

function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [restante,setRestante] = useState(0);
  const [mostrarPregunta, setPregunta] = useState(true);
  const [gastos, setGastos] = useState([]);
  const [gasto, setGasto] = useState({});
  const [crearGasto, setCrearGasto] = useState(false);

//useEffect para actualizar el restante

useEffect(()=>{
  if(crearGasto){
    // agrega nuevo presupuesto
    setGastos([
      ...gastos,
      gasto
    ]);

    // resta del presupuesto actual

    const presupuestoRestante = restante - gasto.cantidad;
    setRestante(presupuestoRestante);
    setCrearGasto(false);
  }
},[gasto, gastos, crearGasto, restante])


  // cuando agregemos un nuevo gasto
  // const agregarNuevoGasto = gasto => {
    
  // }

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
       <div className="contenido-principal contenido">
         {mostrarPregunta ? 
        (
          <Pregunta 
            setPresupuesto={setPresupuesto}
            setRestante={setRestante}
            setPregunta={setPregunta}
          />
        )
        :
        ( <div className="row">
            <div className="one-half column">
              <Formulario 
                setGasto={setGasto}
                setCrearGasto={setCrearGasto}
              />
            </div>  
            <div className="one-half column">
            <Listado gastos={gastos}/>
            <ControlPresupuesto
              presupuesto={presupuesto}
              restante={restante}
            />
            </div>  
          </div>  
        )}
         
       </div>
      </header>
    </div>
  );
}

export default App;
