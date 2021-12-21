import { useEffect } from "react";
import Table from "react-bootstrap/Table";
import {useQuery,
  } from "@apollo/client";
import { GET_PROGRESS } from "../graphql/progress/queriesProgress";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
const TableProgress = () => {

  const { loading, error, data } = useQuery(GET_PROGRESS);  
  useEffect(()=>{
    console.log("data servidor", data);
    }, [data]);
  return (
    <div className="container mt-1 " md="auto">
      <Table striped bordered hover className="Tablep mt-1 text-red text-center ">
        <thead>
          <tr>
            <th>NÚMERO</th>
            <th>ID AVANCE</th>
            <th>ID PROYECTO</th>
            <th>FECHA DE AVANCE</th>
            <th>DESCRIPCIÓN AVANCE</th>
            <th>OBSERVACIÓN DEL LÍDER</th>
            <th>ACCIÓN</th>
          </tr>
        </thead>
        <tbody>
         {data && 
          data.develops.map((s) => {
            //var fechaNueva = new Date(venta.Fecha);
            return (
              <tr key={s._id}>
                <td>{s._id}</td>
                <td>{s.id_develop}</td>
                <td>{s.id_project}</td>
                <td>{s.date_develop}</td>
                <td>{s.description_develop}</td>
                <td>{s.comment_boss}</td>
                <td>
                    <Link to={`/Progress/create/${s._id}`}>
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
export default TableProgress;
