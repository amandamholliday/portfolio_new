import React from 'react';
// import '../App.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function navy() {

    return (
        <Navbar className="justify-content-center" color="black">
            <Nav.Item>
                <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/about">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/projects">Projects</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav.Item>
        </Navbar>
    )
}

export default navy;