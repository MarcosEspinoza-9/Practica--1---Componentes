import React from "react";
import { Table, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; //! libreria
import { faUser } from "@fortawesome/free-solid-svg-icons";

// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
function tablita() {
  return (
    <div>
      <Table bordered hover size="xl">
        <thead>
          <tr>
            <th>#</th>
            <th>
              First Name <FontAwesomeIcon icon={faUser} />{" "}
            </th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@facebook</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@whatsapp</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
          <tr>
          <td colSpan="3" className="text-end"  > </td>{/* //! Alineación del botón a la derecha usando bootsrap */}
          <Button color="secondary">Click aqui</Button>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default tablita;
