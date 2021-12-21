import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import ButtonLoading from "./ButtonLoading";
import useFormData from "../hooks/useFormData";
import Stack from "react-bootstrap/Stack";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import {
  CREATE_PROGRESS,
  UPDATE_PROGRESS,
  DELETE_PROGRESS,
} from "../graphql/progress/MutationProgress";
import { useEffect, useState } from "react";
import { GET_PROGRESS } from "../graphql/progress/queriesProgress";

const FormProject = () => {
  let { id } = useParams();
  const {
    loading: queryLoading,
    error: queryError,
    data: queryData,
  } = useQuery(GET_PROGRESS);

  const [
    createDev,
    { loading: MutationLoading, error: MutationError, data: MutationData },
  ] = useMutation(CREATE_PROGRESS);

  const [
    updateDev,
    { loading: updateLoading, error: updateError, data: updateData },
  ] = useMutation(UPDATE_PROGRESS);
  const [
    deleteDev,
    { loading: deleteLoading, error: deleteError, data: deleteData },
  ] = useMutation(DELETE_PROGRESS);
  const { form, formData, setFormData, updateFormData } = useFormData(null);
  const submitForm = (e) => {
    e.preventDefault();
    if (id === undefined) {
      formData.id_develop = parseInt(formData.id_develop);
      formData.id_project = parseInt(formData.id_project);
      console.log(formData);
      createDev({
        variables: { ...formData },
      });
    } else {
      formData.id_develop = parseInt(formData.id_develop);
      formData.id_project = parseInt(formData.id_project);
      updateDev({
        variables: { _id: id, ...formData },
      });
    }
  };

  const [develop, setDevelop] = useState({});
  const filter = () => {
    //setLista(productos);
    //setResultado({});
    if (id === undefined) {
    } else if (queryData !== undefined) {
      const search = queryData.develops.filter((p) => p._id.includes(id));
      //setProductos(search);

      setDevelop(search[0]);
      console.log(develop.date_develop);
    }
  };

  useEffect(() => {
    filter();
  }, []);

  const handleDeleteDevelop = () => {
    deleteDev({
      variables: { _id: id },
    });
    setDevelop("");
  };
  return (
    <div className="container mt-3" md="1">
      <Form md="4" onSubmit={submitForm} onChange={updateFormData} ref={form}>
        <Row className="mb-1">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label className="text-black">Fecha Avance</Form.Label>
            <Form.Control
              type="text"
              defaultValue={develop.date_develop}
              //value={develop.date_develop}
              //onChange={setDateDevelop}
              name="date_develop"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label className="text-black">ID Avance</Form.Label>
            <Form.Control
              type="text"
              defaultValue={develop.id_develop}
              //value={develop.id_develop}
              //onChange={handleChange}
              name="id_develop"
            />
          </Form.Group>
        </Row>
        <Row className="mb-1">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label className="text-black">ID Proyecto</Form.Label>
            <Form.Control
              type="text"
              defaultValue={develop.id_project}
              //value={develop.id_project}
              //onChange={handleChange}
              name="id_project"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label className="text-black">
              Descripción Del Avance
            </Form.Label>
            <Form.Control
              type="text"
              defaultValue={develop.description_develop}
              //value={develop.description_develop}
              //onChange={handleChange}
              name="description_develop"
            />
          </Form.Group>
        </Row>

        <Row className="mb-1">
          <Stack direction="horizontal" gap={3}>
            <Form.Group as={Col} controlId="formGridEmail" xs={9}>
              <Form.Label className="text-black">
                Comentarios Del Líder
              </Form.Label>
              <Form.Control
                type="text"
                defaultValue={develop.comment_boss}
                //value={develop.comment_boss}
                //onChange={handleChange}
                name="comment_boss"
              />
            </Form.Group>
            <ButtonLoading
              disabled={Object.keys(formData).length === 0}
              loading={false}
              text="Confirmar"
            />
            <div className="vr" />
            <Button
              variant="danger"
              type="button"
              onClick={handleDeleteDevelop}
              className="align-self-end float-end"
            >
              Eliminar
            </Button>
          </Stack>
        </Row>
      </Form>
    </div>
  );
};

export default FormProject;