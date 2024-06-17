import React, { useState } from 'react';  
import lamboActual from '../img/lamboActual.jpeg';  
import lamboNueva from '../img/lamboNueva.jpeg';   

function CambiaImagen() {
  //! Defino el estado para guardar la URL de la imagen
  const [imagenActual, setImagenActual] = useState(lamboActual);

  //! Función  Flecha para cambiar la imagen
  const cambiarImagen = () => {

    //! Cambia la URL de la imagen según el valor actual (Arrow Function) 
    //! : es un operador ternario 
    setImagenActual(Imagen =>  Imagen === lamboActual ? lamboNueva : lamboActual);
  };

  return (
    <div>
      <img 
        src={imagenActual} 
        alt="Imagen actual" 
        style={{ width: '500px', height: 'auto', borderRadius: '500px' }} 
      />
      <button onClick={cambiarImagen} style={{ backgroundColor: 'gray', color: 'white',padding: '10px 20px',border: 'none',borderRadius: '5px',cursor: 'pointer',fontSize: '16px'}}>Click aqui</button>
    </div>
  );
}

export default CambiaImagen;

