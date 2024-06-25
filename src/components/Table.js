import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";
import data from "../data/data.json"; // Importa el archivo JSON
import urlImagen from "../data/urlImagen.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {faCoffee,faAppleAlt,faAnchor,faBell,faBicycle,faCar,faCloud,faCogs, faDice,faDog,faDragon,faFeather,faFish,faFlask,faGamepad, faGuitar,faHeart,faHome,faLeaf,faLemon} from "@fortawesome/free-solid-svg-icons";

//* Objeto para mapear los nombres de los iconos
const iconMap = {faCoffee,faAppleAlt,faAnchor,faBell, faBicycle,faCar,faCloud,faCogs,faDice, faDog, faDragon,faFeather,faFish, faFlask,faGamepad,faGuitar,faHeart,faHome,faLeaf,faLemon};

//* Inicializo el arreglo vacío
const DataTable = () => {
  const [tableData, setTableData] = useState([]);
  const [UrlImagen, setUrlImagen] = useState([]);
  const [modal, setModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null); //*Almacen la URL de la imagen seleccionada para mostrar en el modal.


  //*Parámetro id (por defecto null)
   const toggle = (id = null) => {
     //* si encuentra la imagen seleccionada dentro, actualiza el estado de Url de la imagen
    if (id) {
      //* Busca la imagen correspondiente al id proporcionado
      const selectedImg = UrlImagen.find(item => item.id === id);
      //* Si se encuentra la imagen, se establece su URL en el estado selectedImage
      setSelectedImage(selectedImg ? selectedImg.uri : null);
    }
    //* Cambia el estado del modal (lo abre o lo cierra)
    setModal(!modal);
  };



   //* useEffect para cargar las URLs de las imágenes al montar el componente y actualiza el estado UrlImagen.
   //*  setUrlImagen(urlImagen), actualiza el estado UrlImagen con los datos importados desde urlImagen.json.
  useEffect(() => {
    setUrlImagen(urlImagen);
  }, [])

   //* useEffect para cargar los datos de la tabla al montar el componente 
  useEffect(() => {
    setTableData(data);
  });


  //*El componente DataTable utiliza useState para manejar los estados y
  //*  useEffect para cargar datos al montar el componente.

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
          {/* *//* tabla tiene como estado un arreglo vacio y en jsx le pasamos en un nuevo arreglo las columnas o filas que queramos */}
          {tableData.map((item) => (
            <tr key={item.id}>
              <th>{item.id}</th>
              <td>{item.nombre}</td>
              <td>{item.apellido}</td>
              <td>
                <FontAwesomeIcon icon={iconMap[item.icono]} />
              </td>
              <td>
              {/* //* La función flecha no recibe parámetros, pero cuando se ejecuta, llama a toggle con item.id como argumento. 
              //* crea un nuevo array con los resultados de llamar a una función para cada elemento del array original.*/}
                <Button color="info" onClick={() => toggle(item.id)}>Show Image</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          {selectedImage && <img alt="Sample" src={selectedImage} />}
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
