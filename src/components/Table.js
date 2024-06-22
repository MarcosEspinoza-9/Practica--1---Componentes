import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";
import data from "../data/data.json"; //! Importa el archivo JSON
import urlImagen from "../data/urlImagen.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {faCoffee,faAppleAlt,faAnchor,faBell,faBicycle,faCar,faCloud,faCogs, faDice,faDog,faDragon,faFeather,faFish,faFlask,faGamepad, faGuitar,faHeart,faHome,faLeaf,faLemon} from "@fortawesome/free-solid-svg-icons";

//! OBJETO PARA MAPEAR LOS NOMBRES DE LOS ICONOS
const iconMap = {faCoffee,faAppleAlt,faAnchor,faBell, faBicycle,faCar,faCloud,faCogs,faDice, faDog, faDragon,faFeather,faFish, faFlask,faGamepad,faGuitar,faHeart,faHome,faLeaf,faLemon};

//! INICIALIZO EL ARREGLO VACIO
const DataTable = () => {
  const [tableData, setTableData] = useState([]);
  const [UrlImagen, setUrlImagen] = useState([]);
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  useEffect(() => {
    setUrlImagen(urlImagen);
  }, )
  


  //! OBTENER DATOS  POR MEDIO DE USEEFFECT. DESPUES RENDERIZA 
  useEffect(() => {
    setTableData(data);
  });

  return (
    <div>
      <h1>Dinamic Table</h1>
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Icono</th>
            <th>Button</th>
          </tr>
        </thead>
        <tbody> 
          {/* //! Map pasa los elementos del array (tableData "vacio"), en uno nuevo llamado item */}
          {tableData.map((item) => (
              <tr key={item.id}>
              <th>{item.id}</th>
              <td>{item.nombre}</td>
              <td>{item.apellido}</td>
              <td>
                <FontAwesomeIcon icon={iconMap[item.icono]} />
              </td>
              <td> 
              <Button color="info" onClick={toggle}>Show Image</Button>
              </td>
            </tr>
          ))}
           </tbody>
      </Table>

      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
         <ModalBody> {/* //! Imagen Statica */}
        {/* <img alt="Sample"src="https://picsum.photos/300/200"/> */}
        {UrlImagen.map (item2 => (    
             
           <img alt="Sample" src={item2.uri} />
          
  
          ))}

        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Save
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>

    </div>
  );
};

export default DataTable;
