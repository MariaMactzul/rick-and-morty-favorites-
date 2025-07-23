//Muestra la tarjeta individual con boton para agregar o quitar de favoritos
import { use, useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { UserContext } from "./context/FavoritesContext";
const CharacterCard = ({ user }) => {


    const { Cambio } = useContext(UserContext)

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={user.image} />
            <Card.Body>
                <Card.Title>{user.name}</Card.Title>
                <Card.Text>
                    <NavLink
                        to={`/character/${user.id}`}
                    >Detalles
                    </NavLink>
                </Card.Text>
                {
                    <Button
                        onClick={() => Cambio(user.id)}
                        variant= {user.isFavorite ? 'success' : 'primary'}>
                        {user.isFavorite ? 'Quitar de Favoritos' : 'Agregar a Favoritos'}
                    </Button>
                }
            </Card.Body>
        </Card>
    );
}

export default CharacterCard;