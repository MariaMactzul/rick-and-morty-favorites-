import { useContext } from "react";
import { UserContext } from "./context/FavoritesContext";
import { Container, Row, Col, Spinner, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import CharacterCard from "./CharacterCard";

//Lista de personajes favoritos obtenidos del context
const FavoritesPage = () => {

    const { users } = useContext(UserContext)

    return (
        <>
            <h1 className="text-center">Personajes Favoritos</h1>

            <Container>
                <Row>
                    <Col className="d-flex gap-4 flex-wrap justify-content-center" md={12}>
                        {
                            users.map(item => {
                                if (item.isFavorite) {
                                    return <CharacterCard
                                        user={item}
                                    ></CharacterCard>
                                }
                            }
                            )
                        }
                    </Col>

                </Row>

            </Container>




        </>
    );
}

export default FavoritesPage;