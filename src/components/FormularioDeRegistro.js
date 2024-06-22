import React from "react";
import { useState } from "react";
import { FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import DatosModal from './DatosModal'; 

const FormularioRegistro = () => {
    const [datos, setDatos] = useState({
        nombre: '',
        apellido: '',
        email: '',
        password: '',
        edad: '',
        genero: '',
        rol: '',
        opciones: [],
        notas: '',
        fechaRegistro: ''
    });

    const [reset, setReset] = useState({
        nombre: '',
        apellido: '',
        email: '',
        password: '',
        edad: '',
        genero: '',
        rol: '',
        opciones: [],
        notas: '',
        fechaRegistro: ''
    });

    const reiniciar = () => {
        
    }

 


    
    const [modalOpen, setModalOpen] = useState(false);
    const actionModal = () => setModalOpen(!modalOpen);

    const handleChange = (props) => {
        const { name, value, type, checked } = props.target;
        setDatos({
            ...datos,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        actionModal(); // Abrir el modal al enviar el formulario
    };

    return (
        <div className="form-container">
            <h1>Formulario de Registro</h1>
            <form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label className="fw-bold" for="name">Nombre</Label>
                    <Input id="name" name="nombre" placeholder="Escribe tu nombre" onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label className="fw-bold" for="lastName">Apellido</Label>
                    <Input id="lastName" name="apellido" placeholder="Escribe tu apellido" onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label className="fw-bold" for="Email">Email</Label>
                    <Input id="Email" name="email" placeholder="example@gmail.com" onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label className="fw-bold" for="password">Contraseña</Label>
                    <Input id="password" type="password" name="password" placeholder="Contraseña" onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label className="fw-bold" for="age">Edad</Label>
                    <Input id="age" type="number" name="edad" placeholder="8" onChange={handleChange} />
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input name="genero" type="radio" value="masculino" onChange={handleChange} />
                        Hombre
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input name="genero" type="radio" value="femenino" onChange={handleChange} />
                        Mujer
                    </Label>
                </FormGroup>
                <FormGroup>
                    <Label className="fw-bold" for="Select">Select</Label>
                    <Input id="Select" name="rol" type="select" onChange={handleChange}>
                        <option>Escuela</option>
                        <option>Secundaria</option>
                        <option>Preparatoria</option>
                        <option>Universidad</option>
                    </Input>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" name="opciones" onChange={handleChange} />
                        Opción 1
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" name="opciones" onChange={handleChange} />
                        opción 2
                    </Label>
                </FormGroup>
                <FormGroup>
                    <Label className="fw-bold" for="comments">Notas</Label>
                    <Input id="comments" name="notas" type="textarea" onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label className="fw-bold" for="date">Fecha</Label>
                    <Input id="date" type="date" name="fechaRegistro" onChange={handleChange} />
                </FormGroup>
                <button type="submit" className="btn btn-primary">Mostrar</button>
                <Button type="button" color="secondary" onClick={reiniciar} className="ms-2">Reiniciar</Button>
            </form>
            

            <DatosModal isOpen={modalOpen} toggle={actionModal} datos={datos} />
        </div>
    );
};

export default FormularioRegistro;