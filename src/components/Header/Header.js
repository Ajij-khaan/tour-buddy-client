import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg" sticky="top">
                <Container>
                    <Navbar.Brand as={Link} to="/home" className="fw-bold">TOUR BUDDY</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="ms-auto">
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="#features">Tours</Nav.Link>
                            <Nav.Link href="/signin">SignIn</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;