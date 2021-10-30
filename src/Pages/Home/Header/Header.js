import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/addservices">AddServices</Nav.Link>
                        <Nav.Link as={Link} to="/manageservices">ManageService</Nav.Link>
                        <Nav.Link as={Link} to="/placeorder">PlaceOrder</Nav.Link>
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        {user?.email && <button onClick={logOut}>Log Out</button>}
                        <Navbar.Text>
                            Signed in as: <a href="#login">{user.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;