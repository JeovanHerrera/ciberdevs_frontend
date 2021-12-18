
import React from "react";
import TableSubs from "../components/tableSubscriptions";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { Container } from "react-bootstrap";

function Subscriptions() {
  const handleChange = (event) => {
    
};
  return (
    <div className="subscriptions">
      <Container>
      <Row className="mb-1 mt-3">
      <Form.Group as={Col} controlId="formGridEmail">
        <Form.Control type="text" onChange={handleChange} placeholder="Escriba ID Proyecto o ID del Estudiante"/>
      </Form.Group>
      </Row>
      </Container>
      <TableSubs>

      </TableSubs>
    </div>
  );
}

export default Subscriptions;
