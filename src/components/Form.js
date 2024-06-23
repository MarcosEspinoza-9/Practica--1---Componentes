import React, { useState } from 'react';
import { FormGroup, Label, Input} from "reactstrap";


//!Estado inicial con objeto vacio
const Formulario = () => {
  const [datos, setDatos] = useState({
    nombre: '',
    apellido: '',
  });


  //! Se asigna al nuevo objeto un valor nuevo , que sera vacio
  const EliminarDatos = () => {
    setDatos({
      nombre: '',
      apellido: '',
    });
  };

  const reiniciar = (event) => {
    const { name, value } = event.target;
    setDatos({
      ...datos,
      [name]: value,
    });
  };

  return (
    <div className="form-container">
      <h1>Formulario</h1>
      <form>
        <FormGroup>
          <Label className="fw-bold" for="name">Nombre</Label>
          <Input id="name" name="nombre" placeholder="Escribe tu nombre" onChange={reiniciar} value={datos.nombre} />
        </FormGroup>

        <FormGroup>
          <Label className="fw-bold" for="lastName">Apellido</Label>
          <Input id="lastName" name="apellido" placeholder="Escribe tu apellido" onChange={reiniciar} value={datos.apellido} />
          
        
        </FormGroup>

      </form>
      <button type="button" onClick={EliminarDatos}>Eliminar Campos</button>
    </div>
  );
};

export default Formulario;
