import React from 'react';
import Imagen from './components/Imagen';
import Parrafo from './components/Parrafo';
import Titulo from './components/Titulo';
import Boton from './components/Boton';
import ImagenBoton from './components/ImagenBoton';
import BackroundColor from './components/BackgroundColor';
import SaludoPersonalizado from './components/SaludoPersonalizado';
import Toats from './components/Toats';
import Modal from './components/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App" id='contenedor'>
      <Titulo mensaje="Bienvenido al mundo React!" 
              style= {{ fontFamily: 'Arial ', fontSize: '20px', color: 'green'}}
      />
      <Parrafo texto="Esto es un parrafo"
               style= {{fontFamily: 'Georgia', fontSize: '5px', color: 'gray'}}
      />
      <Imagen 
        url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAAN8QUDKGW2LTw8nhFC0uvsn-S-wIG1EJlw&s" 
        descripcion="Imagen de la empresa" 
        style= {{ width: '600px', height: 'auto', borderRadius:'20px'}}
      />
      
      <Boton/>  
      <ImagenBoton/>
      <BackroundColor/>
      {/* <SaludoPersonalizado/> */}
      <Toats/>
      <Modal/>

    </div>
  );
}

export default App;