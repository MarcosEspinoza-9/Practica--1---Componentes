import React from "react";
import { useState } from "react";
import { FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter, Button, FormFeedback, Table } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faUserPen } from "@fortawesome/free-solid-svg-icons";
import EditModal from './EditarDatosModal';
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

    const [datos, setDatos] = useState(initialState);
    const [datosIngresados, setDatosIngresados] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [editingData, setEditingData] = useState(null);

    const actionModal = () => setModalOpen(!modalOpen);
    const handleChange = (props) => {
        //* props.target: Es una referencia al elemento del DOM que disparó el evento. 
        //*En eventos de formulario (como onChange en un input), target se refiere al elemento HTML en sí mismo.
        //* Esto es llamado desestructuración de objetos en JavaScript para extraer propiedades específicas de un objeto
        //? <Input  id="name" name="nombre" placeholder="Escribe tu nombre" value={datos.nombre}  onChange={handleChange}   required />
        // EJEMPLO
        // name: "nombre"
        // value: El valor actual del input, por ejemplo, "Juan"
        // type: "text"
        // checked: undefined (ya que no es un checkbox o radio button)
       
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
         // Crear un nuevo registro con los datos actuales del formulario
  

        //*  Explicacion
        //? si el tipo de entrada (type) es 'checkbox'. Si es así, utiliza el valor de checked 
        //? (que indica si el checkbox está marcado o no). De lo contrario, utiliza el valor normal (value) del campo de entrada.
        setDatos({
            //!actualiza el estado datos con los nuevos valores del formulario. 
            ...datos,
            [name]: type === 'checkbox' ? checked : value
        });
        

    };

    const handleSubmit = (e) => {
        e.preventDefault(); 
        actionModal(); // Abrir el modal al enviar el formulario
    };


    //* Nueva funcion para guardar en la tabla
    const SaveDataTable = () => {


        //! creo un nuevo objeto
        //! id es una propiedad del objeto nuevoRegistro.
        //!  Esto asegura que cada nuevo registro tiene un id único y secuencial.
        const nuevoRegistro = {
            id: datosIngresados.length + 1,
            ...datos
         };
        //! solamente copeo los datos de un arreglo a otro con todos sus campos (nombre, apellido.etc...)
        //  nuevoRegistro = {  datosIngresados , ...datos  };

        //! el operador ...(Propagacion)  asegura que todos los registros previos se mantengan en el nuevo array 
        //! junto con el nuevo registro.
        setDatosIngresados((estadoAnterior) => [...estadoAnterior, nuevoRegistro]);

        //*nuevoRegistro es el nuevo registro que queremos agregar al array ya existente y asi sucesivamente
        //* estadoAnterior Este objeto contiene los datos del formulario que se han ingresado y queremos guardar.

    };


    //* Eliminar por id registro nuevo 
    const Delete = (id) => {
        //* filter crea un nuevo array con todos los elementos de la condicion 
        //* para cada registro en dato ingresaado se verifica si se cumple la condicion
        //*Si registro.id es diferente del id, el registro se mantiene en el nuevo array y si es igual se excluye
        setDatosIngresados(datosIngresados.filter((registro) => registro.id != id));
    }

    
    //TODO: Funcion para Reiniciar los inputs
    const Reset = () => {
        setDatos(initialState);
    
        // console.log(Reset);  
    };


    //*Actualizar datos del segundo modal
    const updateData = (updatedData) => {
        const updatedList = datosIngresados.map((dato) => (dato.id === updatedData.id ? updatedData : dato));
        setDatosIngresados(updatedList);
        setEditingData(null);
    };

    return (
        <div className="form-container">
            <h1>Formulario de Registro</h1>
            <form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label className="fw-bold" for="name">Nombre</Label>
                    <Input id="name" name="nombre" placeholder="Escribe tu nombre" value={datos.nombre} onChange={handleChange} required />
                    <FormFeedback>Solo acepta letras y espacios</FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Label className="fw-bold" for="lastName">Apellido</Label>
                    <Input id="lastName" name="apellido" placeholder="Escribe tu apellido" value={datos.apellido} onChange={handleChange} required />
                </FormGroup>
                <FormGroup>
                    <Label className="fw-bold" for="Email">Email</Label>
                    <Input id="Email" name="email" placeholder="example@gmail.com" value={datos.email} onChange={handleChange} required />
                </FormGroup>
                <FormGroup>
                    <Label className="fw-bold" for="password">Contraseña</Label>
                    <Input id="password" type="password" name="password" placeholder="Contraseña" value={datos.password} onChange={handleChange} required />
                </FormGroup>
                <FormGroup>
                    <Label className="fw-bold" for="age">Edad</Label>
                    <Input id="age" type="number" name="edad" placeholder="Escribe tu edad" value={datos.edad} onChange={handleChange} required />
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input name="genero" type="radio" value="masculino" checked={datos.genero === 'masculino'} onChange={handleChange} required />
                        Hombre
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input name="genero" type="radio" value="femenino" checked={datos.genero === 'femenino'} onChange={handleChange} required />
                        Mujer
                    </Label>
                </FormGroup>
                <FormGroup>
                    <Label className="fw-bold" for="Select">Select</Label>
                    <Input id="Select" name="rol" type="select" value={datos.rol} onChange={handleChange} required>
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
                    <Input id="comments" name="notas" type="textarea" value={datos.notas} onChange={handleChange} required />
                </FormGroup>
                <FormGroup>
                    <Label className="fw-bold" for="date">Fecha</Label>
                    <Input id="date" type="date" name="fechaRegistro" value={datos.fechaRegistro} onChange={handleChange} required />
                </FormGroup>
                <button type="submit" className="btn btn-primary">Mostrar</button>
                <Button type="button" color="secondary" onClick={Reset} className="ms-2">Reiniciar</Button>
                <Button color="success" className="ms-2" onClick={SaveDataTable}>Guardar</Button>
            </form>

            <div id="datosRegistrados">
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Correo</th>
                            <th>Contraseña</th>
                            <th>Edad</th>
                            <th>Genero</th>
                            <th>Escolaridad</th>
                            <th>Notas</th>
                            <th>Fecha</th>
                            <th>Borrar</th>
                            <th>Editar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {datosIngresados.map((dato, id) => (
                            <tr key={id}>
                                <th scope="row">{id + 1}</th>
                                <td>{dato.nombre}</td>
                                <td>{dato.apellido}</td>
                                <td>{dato.email}</td>
                                <td>{dato.password}</td>
                                <td>{dato.edad}</td>
                                <td>{dato.genero}</td>
                                <td>{dato.rol}</td>
                                <td>{dato.notas}</td>
                                <td>{dato.fechaRegistro}</td>
                                <td>
                                    <Button className="ms-2" color="danger" size="sm" onClick={() => Delete(dato.id)}>
                                        <FontAwesomeIcon icon={faTrash} />
                                    </Button>
                                </td>
                                <td>
                                    <EditModal datos={dato} updateData={updateData} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
            <DatosModal isOpen={modalOpen} toggle={actionModal} datos={datos} />
        </div>
    );
};

export default FormularioRegistro;
