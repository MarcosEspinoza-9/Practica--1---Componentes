import React, { useState, useEffect } from 'react';
import { FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter, Button, FormFeedback } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPen } from "@fortawesome/free-solid-svg-icons";

const EditModal = ({ datos, updateData }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [formData, setFormData] = useState(datos);

    useEffect(() => {
        setFormData(datos);
    }, [datos]);

    const toggle = () => setModalOpen(!modalOpen);

    const handleChange = (props) => {
        const { name, value, type, checked } = props.target;

        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const Submit = () => {
        updateData(formData);
        toggle();
    };

    return (
        <div>
            <Button className="ms-2" color="warning" size="sm" onClick={toggle}>
                <FontAwesomeIcon icon={faUserPen} />
            </Button>
            <Modal isOpen={modalOpen} toggle={toggle}>
                <ModalHeader toggle={toggle}>Editar Datos</ModalHeader>
                <ModalBody>
                    <FormGroup>
                        <Label className="fw-bold" for="name">Nombre</Label>
                        <Input id="name" name="nombre" placeholder="Escribe tu nombre" value={formData.nombre} onChange={handleChange} required />
                        <FormFeedback>Solo acepta letras y espacios</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label className="fw-bold" for="lastName">Apellido</Label>
                        <Input id="lastName" name="apellido" placeholder="Escribe tu apellido" value={formData.apellido} onChange={handleChange} required />
                    </FormGroup>
                    <FormGroup>
                        <Label className="fw-bold" for="Email">Email</Label>
                        <Input id="Email" name="email" placeholder="example@gmail.com" value={formData.email} onChange={handleChange} required />
                    </FormGroup>
                    <FormGroup>
                        <Label className="fw-bold" for="password">Contraseña</Label>
                        <Input id="password" type="password" name="password" placeholder="Contraseña" value={formData.password} onChange={handleChange} required />
                    </FormGroup>
                    <FormGroup>
                        <Label className="fw-bold" for="age">Edad</Label>
                        <Input id="age" type="number" name="edad" placeholder="Escribe tu edad" value={formData.edad} onChange={handleChange} required />
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input name="genero" type="radio" value="masculino" checked={formData.genero === 'masculino'} onChange={handleChange} required />
                            Hombre
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input name="genero" type="radio" value="femenino" checked={formData.genero === 'femenino'} onChange={handleChange} required />
                            Mujer
                        </Label>
                    </FormGroup>
                    <FormGroup>
                        <Label className="fw-bold" for="Select">Select</Label>
                        <Input id="Select" name="rol" type="select" value={formData.rol} onChange={handleChange} required>
                            <option value="">Selecciona una opción</option>
                            <option value="Escuela">Escuela</option>
                            <option value="Secundaria">Secundaria</option>
                            <option value="Preparatoria">Preparatoria</option>
                            <option value="Universidad">Universidad</option>
                        </Input>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" name="opciones" checked={formData.opciones.includes('Opción 1')} onChange={handleChange} />
                            Opción 1
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" name="opciones" checked={formData.opciones.includes('Opción 2')} onChange={handleChange} />
                            opción 2
                        </Label>
                    </FormGroup>
                    <FormGroup>
                        <Label className="fw-bold" for="comments">Notas</Label>
                        <Input id="comments" name="notas" type="textarea" value={formData.notas} onChange={handleChange} required />
                    </FormGroup>
                    <FormGroup>
                        <Label className="fw-bold" for="date">Fecha</Label>
                        <Input id="date" type="date" name="fechaRegistro" value={formData.fechaRegistro} onChange={handleChange} required />
                    </FormGroup>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={Submit}>Actualizar Datos</Button>
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default EditModal;