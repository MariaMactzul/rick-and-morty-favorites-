import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
const Menu = () => {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">Ricky and Morty</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink className={({ isActive }) => isActive ? 'active text-danger nav-link' : 'nav-link'} to="/">Lista Personajes</NavLink>
                            <NavLink className={({ isActive }) => isActive ? 'active text-danger nav-link' : 'nav-link'} to="/favorites">Favoritos</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Menu;