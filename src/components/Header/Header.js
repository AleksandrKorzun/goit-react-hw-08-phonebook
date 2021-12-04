import NavigationsItem from "./NavigationsItem/NavigationsItem";
import { Navbar, Container, Nav } from "react-bootstrap";
import {navList, headerContainer} from "./Header.module.css"
import { Link } from "react-router-dom";
const Header = () => {
    return (

        <header>
            <Navbar bg="primary" variant="dark">
                <Container className={headerContainer}>
                    <Link to="/"><Navbar.Brand>PHONEBOOK</Navbar.Brand></Link>
                    <Nav className="me-aut">
                        <ul className={navList}>
                            <NavigationsItem/>
                        </ul>
                    </Nav>
                </Container>
            </Navbar>
            
        </header>
    );
}

export default Header;