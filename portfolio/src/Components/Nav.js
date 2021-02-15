import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav'

function nav() {

    return (
        <Nav className="justify content-center">
            <Nav.Item>
                <Nav.Link href="/home">Home</Nav.Link>
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
        </Nav>
    )
}

export default nav;