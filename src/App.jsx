import React, { useState, Fragment } from 'react';

const Formulario = ({ crearCita }) => {
    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });
    const actualizarState = e => {
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    };

    const enviarCita = e => {
        e.preventDefault();
        crearCita(cita);
    }

    return (
        <Fragment>
            <h2>Crear Cita</h2>
            <form onSubmit={enviarCita}>
                <label>Nombre Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={actualizarState}
                />

                <label>Nombre Dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre Dueño de la Mascota"
                    onChange={actualizarState}
                />

                <label>Fecha</label>
                <input
                    type="date"
                    className="u-full-width"
                    name="fecha"
                    onChange={actualizarState}
                />

                <label>Hora</label>
                <input
                    type="time"
                    className="u-full-width"
                    name="hora"
                    onChange={actualizarState}
                />

                <label>Sintomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={actualizarState}
                />
                <button type="submit" className="button-primary u-full-width">Agregar</button>
            </form>
        </Fragment>
    )
};

const App = () => {
    const [citas, guardarCitas] = useState([]);
    console.log(citas);

    const crearCita = cliente => {
        const nuevasCitas = [...citas, cliente];
        guardarCitas(nuevasCitas);
    }
    return (
        <div>
            <h1>Administrador de pacientes</h1>
            <div className="container">
                <div className="row">
                    <div className="one-half column">
                        <Formulario crearCita={crearCita} />
                    </div>
                    <div className="one-half column">
                        {citas.map((cita, index) => {
                            return (<p>hola</p>)
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
