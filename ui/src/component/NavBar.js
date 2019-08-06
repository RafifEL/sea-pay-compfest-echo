import React, {Component} from 'react';

import {Navbar, NavDropdown, Nav} from 'react-bootstrap'


class NavBar extends Component{
    state = {
        login: "None"
    }
    render(){
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">SEA Pay</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#features">Home</Nav.Link>
                        <Nav.Link href="#pricing" style={{display:"none"}}>Pricing</Nav.Link>
                        <NavDropdown title="Rafif" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Edit Profile</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2" style={{display:"none"}}>My Cart</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Logout</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#features">Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
export default NavBar;



    

