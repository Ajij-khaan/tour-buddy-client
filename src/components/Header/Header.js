import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hook/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" sticky="top" bg="dark" variant="dark">
                <Container className="fw-bold">
                    <Navbar.Brand as={Link} to="/home" className="fw-bold">TOUR BUDDY</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="ms-auto">
                            <Nav.Link as={HashLink} to="/home">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/Tours">Tours</Nav.Link>

                            {/* Check login or not and show the name */}
                            {user?.displayName &&

                                <Nav.Link as={Link} to="/myorder" className="fw-bold">My Orders</Nav.Link>
                            }
                            {user?.displayName &&

                                <Nav.Link as={Link} to="/manageallorder" cclassName="fw-bold">Manage All Orders</Nav.Link>
                            }
                            {user?.displayName &&

                                <Nav.Link as={Link} to="/addtour" className="fw-bold">Add Tours</Nav.Link>
                            }
                            {!user?.displayName &&

                                <Nav.Link as={Link} to="/signIn" className="btn btn-primary rounded-pill px-4 fw-bold">SignIn</Nav.Link>
                            }

                            {user?.displayName &&
                                <div className="text-white d-flex align-items-center">Howday! {user.displayName} </div>
                            }
                            {user?.displayName &&
                                <Button onClick={logOut} className="text-white btn btn-success rounded-pill ms-2 fw-bold">Sign Out </Button>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;