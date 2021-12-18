import React from 'react';
import TableProgress from '../components/tableProgress';
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

  

function Progress() {
  const handleChange = (event) => {
    
  };

  return (
    <div>
    <Container>
      <Row className="mb-1 mt-3">
      <Form.Group as={Col} controlId="formGridEmail">
        <Form.Control type="text" onChange={handleChange} placeholder="Escriba ID Proyecto o ID del Avance"/>
      </Form.Group>
      </Row>
      </Container>
      <TableProgress>
        
      </TableProgress>
    </div>
  );
}

export default Progress;