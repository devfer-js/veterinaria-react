import React, { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';

const App = () => {
  const [citas, guardarCitas] = useState([]);

  const crearCita = cliente => {
    const nuevasCitas = [...citas, cliente];
    guardarCitas(nuevasCitas);
  };

  const eliminarCita = index => {
    const nuevasCitas = [...citas];
    nuevasCitas.splice(index, 1);
    guardarCitas(nuevasCitas);
  };

  const titulo = Object.keys(citas).length === 0
    ? 'No hay Citas'
    : 'Administrar las citas';
  return (
    <div>
      <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita} />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {citas.map((cita, index) => (
              <Cita
                key={index}
                index={index}
                cita={cita}
                eliminarCita={eliminarCita}
              ></Cita>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
