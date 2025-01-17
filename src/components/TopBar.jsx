import React from "react";
import { Navbar, Nav, Container, NavLink } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { MdLocalOffer } from "react-icons/md";

export const TopBar = () => {
    return (
        
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container fluid>
                    <h6 className='text-light'>
                        <MdLocalOffer className="text-warning" />
                        Livraison gratuite à domicile pour toutes commande superieure à 50 euros
                    </h6>
                    <Nav className="ms-auto">
                        <LinkContainer to="/" activeClassName>
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/about" activeClassName>
                            <Nav.Link>About</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/contact" activeClassName>
                            <Nav.Link>Contact</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/term-policy" activeClassName>
                            <Nav.Link>Terms and Policy</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Container>
            </Navbar>
        
    );
};

