import NavigationsItem from "./NavigationsItem/NavigationsItem";
import { Navbar, Container, Nav } from "react-bootstrap";
import {navList} from "./Header.module.css"
const Header = () => {
    return (

        <header>
            <Navbar bg="primary" variant="dark">
                <Container>
                <Navbar.Brand href="#home">PHONEBOOK</Navbar.Brand>
                <Nav className="me-auto">
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