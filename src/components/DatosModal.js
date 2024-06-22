import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

//* Recive 3 props
//* True o false, para la primer porps
//* Alternar en abrir o cerra con toggle
//* Un Objeto
const DatosModal = ({ isOpen, toggle, datos }) => {

    return (
        <Modal isOpen={isOpen}>
            <ModalHeader >Datos del Registro</ModalHeader>
            <ModalBody>
                <p><strong>Nombre:</strong> {datos.nombre}</p>
                <p><strong>Apellido:</strong> {datos.apellido}</p>
                <p><strong>Email:</strong> {datos.email}</p>
                <p><strong>Contraseña:</strong> {datos.password}</p>
                <p><strong>Edad:</strong> {datos.edad}</p>
                <p><strong>Género:</strong> {datos.genero}</p>
                <p><strong>Rol:</strong> {datos.rol}</p>
                <p><strong>Opciones:</strong> {datos.opciones.toString()}</p>
                <p><strong>Notas:</strong> {datos.notas}</p>
                <p><strong>Fecha de Registro:</strong> {datos.fechaRegistro}</p>
            </ModalBody>
            <ModalFooter>
                <Button color="secondary" onClick={toggle}>Cerrar</Button>
                
            </ModalFooter>
        </Modal>
    );
};

export default DatosModal;