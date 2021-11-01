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
            <Navbar collapseOnSelect expand="lg" sticky="top" variant="dark">
                <Container className="fw-bold">
                    <Navbar.Brand as={Link} to="/home" className="fw-bold text-dark my-3">TOUR BUDDY</Navbar.Brand>
                    <Navbar.Toggle className=' bg-dark' />
                    <Navbar.Collapse className="justify-content-end text-dark">
                        <Nav className="ms-auto">
                            <Nav.Link as={HashLink} to="/home" className="fw-bold text-dark">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#popular-tours" className="fw-bold text-dark">Tours</Nav.Link>

                            {/* Check login or not and show the name */}
                            {user?.displayName &&

                                <Nav.Link as={Link} to="/myorder" className="fw-bold text-dark">My Orders</Nav.Link>
                            }
                            {user?.displayName &&

                                <Nav.Link as={Link} to="/manageallorder" className="fw-bold text-dark">Manage All Orders</Nav.Link>
                            }
                            {user?.displayName &&

                                <Nav.Link as={Link} to="/addtour" className="fw-bold text-dark">Add Tours</Nav.Link>
                            }
                            {!user?.displayName &&

                                <Nav.Link as={Link} to="/signIn" className="text-white btn btn-danger rounded-pill px-4 fw-bold">SignIn</Nav.Link>
                            }

                            {user?.displayName &&
                                <div className="ms-5 d-flex align-items-center text-danger">Howday! {user.displayName} </div>
                            }
                            {user?.displayName &&
                                <Button onClick={logOut} className="text-white btn btn-danger rounded-pill ms-2 fw-bold">Sign Out </Button>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;