import React from 'react'
import { Nav, Navbar, NavDropdown, Button } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'

function TopBar() {
    return (
        <Navbar bg="light" expand="lg" >
            <Navbar.Brand style={{ margin: "5px 0 0 20px" }} href="#home">
                <img src="https://cdn.emojidex.com/emoji/xxxhdpi/carrot.png" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <Nav>
                    <Nav.Link href="#LogIn">Log In</Nav.Link>
                    <Button variant="success">Sign Up</Button>{' '}
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    )
}

export default TopBar