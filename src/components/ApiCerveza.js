import React, { useEffect, useState } from 'react';
import { Button, Table, Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const DataBeer = () => {
    //TODO: Estado para manejar los datos de la API
  const [dataBeer, setDataBeer] = useState([]);
 

  // TODO: Funcion para obtener los datos de la API
  const fetchData = () => {
    fetch("https://random-data-api.com/api/beer/random_beer?size=15") //TODO: Regresa una Promesa
      .then(response => response.json())
      .then((json) => setDataBeer(json))
      .catch(error => {
       console.error('No se puede obtener la petición:', error);
      });
  };

  //TODO: Carga el estado de la peticion y la renderiza
  //!NOTA: El arreglo vacio es para que unicamente la renderice por primera vez
  useEffect(() => {
    fetchData();
  }, []);
//   console.log(fetchData());

 

  return (
    <Container>
      <h1>ApiCerveza</h1>
      <Button color="primary" onClick={fetchData}>Datos de cerveza</Button>
      {dataBeer && (
        <Table striped>
          <thead>
            <tr>
              <th>ID</th>
              <th>UID</th>
              <th>Nombre</th>
              <th>Estilo</th>
              <th>Hop</th>
              <th>Yeast</th>
              <th>Malts</th>
              <th>IBU</th>
              <th>Alcohol</th>
              <th>BLG</th>
            </tr>
          </thead>
          <tbody>
            {dataBeer.map((beer) => (
              <tr key={beer.id}>
                <td>{beer.id}</td>
                <td>{beer.uid}</td>
                <td>{beer.name}</td>
                <td>{beer.style}</td>
                <td>{beer.hop}</td>
                <td>{beer.yeast}</td>
                <td>{beer.malts}</td>
                <td>{beer.ibu}</td>
                <td>{beer.alcohol}</td>
                <td>{beer.blg}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
   
    </Container>
  );
};

export default DataBeer;
