import { useEffect } from "react";
import Table from "react-bootstrap/Table";
import {useQuery,
  } from "@apollo/client";
import { GET_SUBSCRIPTIONS } from "../graphql/suscriptions/queriesSuscriptions";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const TableSubs = () => {

  const { loading, error, data } = useQuery(GET_SUBSCRIPTIONS);  
  useEffect(()=>{
    console.log("data servidor", data);
    }, [data]);
  return (
    <div className="container mt-1 " md="auto">
      <Table striped bordered hover className="Tablep mt-1 text-red text-center ">
        <thead>
          <tr>
            <th>NÚMERO</th>
            <th>ID INSCRIPCIÓN</th>
            <th>ID PROYECTO</th>
            <th>ID ESTUDIANTE</th>
            <th>ESTADO</th>
            <th>FECHA INGRESO</th>
            <th>FECHA EGRESO</th>
            <th>ACCIÓN</th>

          </tr>
        </thead>
        <tbody>
         {data && 
          data.subscriptions.map((s) => {
            //var fechaNueva = new Date(venta.Fecha);
            return (
              <tr key={s._id}>
                <td>{s._id}</td>
                <td>{s.id_subscription}</td>
                <td>{s.id_project}</td>
                <td>{s.id_user}</td>
                <td>{s.status_subscription}</td>
                <td>{s.date_in_subs}</td>
                <td>{s.date_out_subs}</td>
                <td>
                    <Link to={`/Subscriptions/Create/${s._id}`}>
                    <Button id={s._id} variant="primary">Editar</Button>
                    </Link>
                </td>
              </tr>
            );
          })} 
        </tbody>
      </Table>
    </div>
  );
};
export default TableSubs;
