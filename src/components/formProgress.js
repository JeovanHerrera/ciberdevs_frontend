import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { BrowserRouter as Router, Switch, Route, useParams } from "react-router-dom";
import {useQuery,
} from "@apollo/client";
import { GET_PROGRESS } from "../graphql/progress/queriesProgress";
import { useEffect, useState } from "react";

const FormProgress = () =>{
    const { loading, error, data } = useQuery(GET_PROGRESS);  
    let {id} = useParams();
    const [develop, setDevelop] = useState({});
    const filter = () => {
        //setLista(productos);
        //setResultado({});
        if (id.length === 0) {
            
        } else if(data !== undefined) {
            const search = data.develops.filter((p) => p._id.includes(id));
            //setProductos(search);
            setDevelop(search[0]);
            console.log(search[0]);
        }
    };
    const handleChange = (e)=>{
        console.log(e)
        setDevelop({
            [e.target.name]:e.target.value
        })
    }

    useEffect(()=>{
        filter();
    }, [])
    return (

        <div className="container mt-3" md="1" >
                <Form md="4">
                <Row className="mb-1">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label className="text-black">Fecha Avance</Form.Label>
                        <Form.Control type="text" value={develop.date_develop} onChange={handleChange} name="date_develop"  />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label className="text-black">ID Avance</Form.Label>
                        <Form.Control type="text" value={develop.id_develop}  onChange={handleChange} name="id_develop"  />
                    </Form.Group>
                </Row>
                <Row className="mb-1">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label className="text-black">ID Proyecto</Form.Label>
                        <Form.Control type="text" value={develop.id_project} onChange={handleChange} name="id_project"/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label className="text-black">Descripción Del Avance</Form.Label>
                        <Form.Control type="text" value={develop.description_develop} onChange={handleChange} name="description_develop"/>
                    </Form.Group>
                </Row>

                <Row className="mb-1">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label className="text-black"  >Comentarios Del Líder</Form.Label>
                        <Form.Control type="text" value={develop.comment_boss} onChange={handleChange} name="comment_boss"/>
                    </Form.Group>
                    <Col xs={1} className=" mt-1 p-0">
                    <Button as={Col} variant="primary" type="button" className="float-end mt-4 me-1" >
                             Actualizar
                    </Button>
                    </Col>
                </Row>

                              
            </Form>
        </div>
    );


}


export default FormProgress;