import React, { useState } from "react";
import { Button ,Card, CardBody , CardTitle,CardFooter, CardText, CardHeader , Spinner} from "reactstrap";

function DatosUsuarios() {
  //* Estado para guardar el resultado de la petición
  const [data, setData] = useState(null);
//   const [loading,setLoading] = useState(true);

  //* Función para hacer la petición HTTP
  const fetchData = () => {

    // setLoading(true);

    fetch("https://random-data-api.com/api/v2/users?size=1") //*TODO: Recibe una promesa
      .then((response) => response.json()) //* Convierte la respuesta en JSON
      .then((json) => setData(json)) //* Asigna los datos JSON al estado
       .catch((error) => console.error("Error:", error));
    //   setLoading(false)
  };

  return (
    <div>
      <Button color="warning" onClick={fetchData}>
      <h4>Datos de Usuarios</h4>
      </Button>
      {/* {loading && <Spinner> Loading...</Spinner>} */}
      {data &&  (
        <div>
          <Card body style={{width: "18rem",}}>
          <CardHeader tag="h1"> <strong>{data.first_name} {data.last_name}</strong>  </CardHeader>
            <CardBody>
              <CardText>
                {/* //* Renderizacion de los datos */}
                    <strong>id:</strong> {data.id}<br/>
                    <strong>uid:</strong> {data.uid}<br/>
                    <strong>password:</strong> {data.password}<br/>
                    <strong>username:</strong> {data.username}<br/>
                    <strong>email:</strong> {data.email}<br/>
                    <img src={data.avatar} alt="" />
                    <strong>gender:</strong> {data.gender}<br/>
                    <strong>phone_number:</strong> {data.phone_number}<br/>
                    <strong>social_insurance_number:</strong> {data.social_insurance_number}<br/>
                    <strong>date_of_birth:</strong> {data.date_of_birth}<br/>
                    <strong>employment:</strong> {data.employment.title}<br/>
                    <strong>key_skill:</strong> {data.employment.title}<br/>
                    {/* //****************** ADDRESS   ***************/}
                    <h1>---Address---</h1>
                    <strong>city:</strong> {data.address.city}<br/>
                    <strong>street:</strong> {data.address.street_name}<br/>
                    <strong>street_address:</strong> {data.address.street_address}<br/>
                    <strong>zip_code:</strong> {data.address.zip_code}<br/>
                    <strong>state:</strong> {data.address.state}<br/>
                    <strong>country:</strong> {data.address.country}<br/>
                    <strong>lat:</strong> {data.address.coordinates.lat}<br/>
                    <strong>lng:</strong> {data.address.coordinates.lng}<br/>
                    <strong>street:</strong> {data.address.street_name}<br/>
                    {/* //****************** Credit-Card   ***************/}
                    <h1>---CreditCart---</h1>
                    <strong>cc_number:</strong> {data.credit_card.cc_number}<br/>
              </CardText>
            </CardBody>
            <CardFooter className="text-muted"> 
                <strong>Plan:</strong> {data.subscription.plan}<br/>
                <strong>Estado:</strong> {data.subscription.status}<br/>
                <strong>Método de Pago:</strong> {data.subscription.payment_method}<br/>
                <strong>Plazo:</strong> {data.subscription.term}
            </CardFooter>
          </Card>
        </div>
      )}
    </div>
  );
}

export default DatosUsuarios;
