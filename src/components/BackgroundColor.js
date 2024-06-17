import { useState } from "react";

function CambiaColorFondo() {
  //! Estado para manejar el color de fondo. Asignamos el color blanco incialmente
  const [fondo, setFondo] = useState("#ffffff");

  //! Variable con un color nuevo
  const fondoRojo = "#FF0000";

  //! Función para cambiar el color de fondo
  const cambiarColorFondo = () => {
    //! Alterna entre el color actual y el nuevo color gracias al estado

    setFondo(Color =>  Color === '#ffffff' ? fondoRojo : '#ffffff');
  };

  return (
    //! Se asigna estilo inicial con el fondo que se define al principio del estado
    <div
      style={{ backgroundColor: fondo, padding: "20px", borderRadius: "5px",  width: "50%"}}
    >
      <button onClick={cambiarColorFondo}
      style={{ backgroundColor: 'gray', color: 'white',padding: '10px 20px',border: 'none',borderRadius: '5px',cursor: 'pointer',fontSize: '16px'}}
      >Cambiar color de fondo</button>
    </div>
  );
}

export default CambiaColorFondo;
