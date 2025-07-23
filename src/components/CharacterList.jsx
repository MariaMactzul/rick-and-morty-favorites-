import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Container, Row, Col, Spinner, Form } from "react-bootstrap";
import CharacterCard from "./CharacterCard";
import { UserContext } from "./context/FavoritesContext";
import CharacterDetail from "./CharacterDetail";
//Muestra todos los personajes

const CharacterList = () => {

    const { users, isLoading, buscador, setBuscador } = useContext(UserContext)

    const filtro = users?.filter(item => item.name.toUpperCase().includes(buscador.toUpperCase()))

    return (
        <>

            <Container>

                <Form>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Buscador</Form.Label>
                        <Form.Control value={buscador} onChange={(event)=>setBuscador(event.target.value)} type="text" placeholder="busque su personaje" />
                    </Form.Group>
                </Form>

                <h1 className="text-center">Ricky and Morty Favorites</h1>
                {
                    isLoading ?
                        (

                            <Row>
                                <Col className="vh-100 d-flex justify-content-center align-items-center">
                                    <Spinner variant="danger" animation="grow" />
                                </Col>
                            </Row>
                        )
                        :
                        (
                            <Row>
                                <Col className="d-flex gap-4 flex-wrap justify-content-center" md={12}>
                                    {
                                        filtro?.map((user, index) =>

                                            <CharacterCard
                                                key={index}
                                                user={user}
                                            />

                                        )
                                    }
                                </Col>

                            </Row>
                        )

                }
            </Container>

        </>
    );
}

export default CharacterList;