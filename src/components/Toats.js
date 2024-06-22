import React, { useState } from "react";
import { Button, Toast, ToastBody, ToastHeader } from "reactstrap";

function ToastComponent() {
    const [mostrarToast, setMostrarToast] = useState(false);
  
    //! Arrow function para mostrar el estado contrario a lo que se inicializo y viseversa
    const mostrar = () => setMostrarToast(!mostrarToast);
  
    return (
      <div >
        {/* //*Boton para mandar llamar la arrow function "mostrar" */}
        <Button color="primary" onClick={mostrar}>Mostrar Toast Azul</Button>

        {/* //* Si esta abierta mandamos llamar la funcion de cerrar */}
          <Toast isOpen={mostrarToast} className="bg-primary">

        {/* //* Encabezado del Toast */}
            <ToastHeader toggle={mostrar}  className="text-black bg-primary">Encabezado</ToastHeader>

        {/* //* Cuerpo del Toast */}
            <ToastBody>Hola Mundo!</ToastBody>
            
          </Toast>
        
      </div>
    );
  }
  
  export default ToastComponent;
  