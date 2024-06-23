import React from "react";
import { useState } from "react";
import { FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import DatosModal from './DatosModal'; 

const FormularioRegistro = () => {
    //! Guardo el estado inicial de objebjetos en una variable
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

    //* Hago un estado donde incialmente el estado es la variable de objetos vacios
    const [datos, setDatos] = useState(initialState);
   


    //* Estado para manejar el estado del Modal
    const [modalOpen, setModalOpen] = useState(false);
    const actionModal = () => setModalOpen(!modalOpen);

    //TODO: Funcion para cambiar el estado de los datos iniciales
        const handleChange = (props) => {
        const { input, value, type, checked } = props.target;
        setDatos({
            //! operador de propagación que se utiliza para copiar todas las propiedades existentes del objeto datos al nuevo objeto.
            ...datos,
            //* si el input(type) es chekbox es tru, si no, se le asiga un valor que es el actual del input
            [input]: type === 'checkbox' ? checked : value
        });
    };

    //TODO: Funcion para abrir el modal
    const handleSubmit = (props) => {
        props.preventDefault(); //! // Evitar la recarga de la página
        actionModal(); //! Abrir el modal al enviar el formulario
        //* console.log(datos);
    };

    //TODO: Funcion para Reiniciar los inputs
    const Reset = () => {
        setDatos(initialState);
        // console.log(Reset);
    };


    return (
        <div className="form-container">
            <h1>Formulario de Registro</h1>
            {/* //!El atributo onChange asigna una función manejadora de eventos que se ejecuta cada vez que el valor del input cambia.  */}
            <form onSubmit={handleSubmit} > 
                <FormGroup>
                    <Label className="fw-bold" for="name">Nombre</Label>
                    {/* //! El atributo "value" vincula el valor del input al estado del componente. 
                    //! Esto asegura que el input muestre el valor actual del estado y se actualice automáticamente cuando el estado cambie. */}
                    <Input id="name" name="nombre" placeholder="Escribe tu nombre" value={datos.nombre} onChange={handleChange}   />
                </FormGroup>
                <FormGroup>
                    <Label className="fw-bold" for="lastName">Apellido</Label>
                    <Input id="lastName" name="apellido" placeholder="Escribe tu apellido" value={datos.apellido} onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label className="fw-bold" for="Email">Email</Label>
                    <Input id="Email" name="email" placeholder="example@gmail.com" value={datos.email} onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label className="fw-bold" for="password">Contraseña</Label>
                    <Input id="password" type="password" name="password" placeholder="Contraseña" value={datos.password} onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label className="fw-bold" for="age">Edad</Label>
                    <Input id="age" type="number" name="edad" placeholder="8" value={datos.edad} onChange={handleChange} />
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input name="genero" type="radio" value="masculino" checked={datos.genero === 'masculino'} onChange={handleChange} />
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
                    <Input id="Select" name="rol" type="select" value={datos.rol} onChange={handleChange}>
                        <option onChange={handleChange} >Escuela</option>
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
                    <Input id="comments" name="notas" type="textarea" value={datos.notas} onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label className="fw-bold" for="date">Fecha</Label>
                    <Input id="date" type="date" name="fechaRegistro" value={datos.fechaRegistro} onChange={handleChange} />
                </FormGroup>
                <button type="submit" className="btn btn-primary">Mostrar</button>
                <Button type="button" className="btn btn-secondary" onClick={Reset}>Resetear</Button>
            </form>
            
           
            <DatosModal isOpen={modalOpen} toggle={actionModal}  datos={datos}/>
            
        </div>
    );
};

export default FormularioRegistro;