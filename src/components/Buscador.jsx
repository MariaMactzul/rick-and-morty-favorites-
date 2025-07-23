import { useContext } from "react";
import { UserContext } from "./context/FavoritesContext";
import { Form } from "react-bootstrap";

const Buscador = () => {
    const { buscador, setBuscador } = useContext(UserContext)
    return (
        <Form>
        <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Buscador</Form.Label>
            <Form.Control value={buscador} onChange={(event) => setBuscador(event.target.value)} type="text" placeholder="busque su personaje" />
        </Form.Group>
    </Form>
    );
}

export default Buscador;