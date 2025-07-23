//Detalle de personaje usando useParams

import { useContext} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "./context/FavoritesContext";
import { Button, Card } from "react-bootstrap";
import { Container } from 'react-bootstrap';

//Ver detalle  de un personaje  al hacer click (usar ruta /character/:id)
const CharacterDetail = () => {

    const volver = useNavigate()

    const { id } = useParams()
    const { users } = useContext(UserContext)
    const personaje = users?.find(user => user.id == id)

    const VolverListaPersonajes = () => {
        volver('/')
    }

    return (
        <>
            {
                personaje != null &&
                <>
                    <Container className="d-flex flex-column align-items-center">
                        <h1 className="text-center mt-5">Detalles del Personaje {personaje.name}</h1>

                        <Card className="mt-5" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={personaje.image} />
                            <Card.Body>
                                <Card.Title>{personaje.name}</Card.Title>
                                <Card.Text>
                                    <ul>
                                        <li><strong>Gender:</strong> {personaje.gender}</li>
                                        <li><strong>Nombre:</strong> {personaje.name}</li>
                                        <li><strong>Specie:</strong> {personaje.species}</li>
                                        <li><strong>Status:</strong> {personaje.status}</li>
                                    </ul>
                                </Card.Text>
                                <Button onClick={VolverListaPersonajes}>Regresar a la Lista</Button>
                            </Card.Body>
                        </Card>
                    </Container>


                </>
            }


        </>
    );
}

export default CharacterDetail;