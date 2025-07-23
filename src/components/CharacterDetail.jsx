//Detalle de personaje usando useParams

import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "./context/FavoritesContext";
import { Button } from "react-bootstrap";

//Ver detalle  de un personaje  al hacer click (usar ruta /character/:id)
const CharacterDetail = () => {

    const volver = useNavigate()

    const { id } = useParams()
    const { users} = useContext(UserContext)
    const personaje = users?.find(user => user.id == id)

    const VolverListaPersonajes = () => {
        volver('/')
    }

    return (
        <>
            {
                personaje != null &&
                    <>
                        <h1>Detalles del Personaje {personaje.name}</h1>
                        <ul>
                            <li>Gender: {personaje.gender}</li>
                            <li>Nombre: {personaje.name}</li>
                            <li>Specie: {personaje.species}</li>
                            <li>Status: {personaje.status}</li>
                        </ul>
                    </>
            }

            <Button onClick={VolverListaPersonajes}>Regresar a la Lista</Button>
        </>
    );
}

export default CharacterDetail;