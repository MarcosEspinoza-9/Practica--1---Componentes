import React from "react";
import { useState } from "react";
import { FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter, Button, FormFeedback  } from "reactstrap";
import DatosModal from './DatosModal'; 

const FormularioRegistro = () => {
    const initialState = {
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
    };
    const [datos, setDatos] =useState(initialState) ;

    //!Estado que actualiza si la exprecion regular no se cumple
    

    
    const [modalOpen, setModalOpen] = useState(false);
    const actionModal = () => setModalOpen(!modalOpen);


    const handleChange = (props) => {
        const { name, value, type, checked } = props.target;
      
        
        switch (name) {
            case 'nombre':
            case 'apellido':
            case 'notas':
                var regex = /^[A-Za-z\s]+$/; //! Expresión regular que permite solo letras y espacios
                if (!regex.test(value )) {
                    
                    // let errorMsg = 'Solo se permiten letras y espacios';
                    return; //! Si el valor no coincide con la expresión regular, no se actualiza el estado
                }
                break;
            default:
                break;
        }

        setDatos({
            ...datos,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); 
        actionModal(); // Abrir el modal al enviar el formulario
    };

    
    //TODO: Funcion para Reiniciar los inputs
    const Reset = () => {
        setDatos(initialState);
    
        // console.log(Reset);  
    };

    return (
        <div className="form-container">
            <h1>Formulario de Registro</h1>
            <form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label className="fw-bold" for="name">Nombre</Label>
                    <Input  id="name" name="nombre" placeholder="Escribe tu nombre" value={datos.nombre}  onChange={handleChange} />
                    <FormFeedback>Solo acepta letras y espacios</FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Label className="fw-bold" for="lastName">Apellido</Label>
                    <Input  id="lastName"  name="apellido" placeholder="Escribe tu apellido" value={datos.apellido} onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label className="fw-bold" for="Email">Email</Label>
                    <Input id="Email" name="email" placeholder="example@gmail.com" value={datos.email}  onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label className="fw-bold" for="password">Contraseña</Label>
                    <Input id="password" type="password" name="password" placeholder="Contraseña" value={datos.password}  onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label className="fw-bold" for="age">Edad</Label>
                    <Input id="age" type="number" name="edad" placeholder="Escribe tu edad" value={datos.edad}  onChange={handleChange} />
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input name="genero" type="radio" value="masculino" checked={datos.genero === 'masculino'}   onChange={handleChange} />
                        Hombre
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input name="genero" type="radio" value="femenino" checked={datos.genero === 'femenino'} onChange={handleChange} />
                        Mujer
                    </Label>
                </FormGroup>
                <FormGroup>
                    <Label className="fw-bold" for="Select">Select</Label>
                    <Input id="Select" name="rol" type="select"  value={datos.rol} onChange={handleChange}>
                        <option value="">Selecciona una opción</option>
                        <option value="Escuela">Escuela</option>
                        <option value="Secundaria">Secundaria</option>
                        <option value="Preparatoria">Preparatoria</option>
                        <option value="Universidad">Universidad</option>
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
                    <Input id="comments" name="notas" type="textarea" value={datos.notas} onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label className="fw-bold" for="date">Fecha</Label>
                    <Input id="date" type="date" name="fechaRegistro" value={datos.fechaRegistro} onChange={handleChange} />
                </FormGroup>
                <button type="submit" className="btn btn-primary">Mostrar</button>
                <Button type="button" color="secondary" onClick={Reset} className="ms-2">Reiniciar</Button>
            </form>
            

            <DatosModal isOpen={modalOpen} toggle={actionModal} datos={datos} />
        </div>
    );
};

export default FormularioRegistro;