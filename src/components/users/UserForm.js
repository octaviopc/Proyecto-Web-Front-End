import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function UserForm() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="usuario">
        <Form.Label>Introducir usuario</Form.Label>
        <Form.Control type="text" placeholder="Nuevo usuario" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="correo">
        <Form.Label>Correo</Form.Label>
        <Form.Control type="email" placeholder="correo" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Agregar
      </Button>
    </Form>
  );
}

export default UserForm;
