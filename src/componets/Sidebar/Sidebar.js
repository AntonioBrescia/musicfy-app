

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Navbar, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import "./Sidebar.scss";

const Sidebar = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Navbar expand="lg" variant="light" bg="light">
                <Container>
                    <Navbar.Brand href="#">Template App</Navbar.Brand>
                    <Button className= "sidebarToggle" variant="outline-secondary" onClick={handleShow}>
                    <FontAwesomeIcon icon={faBars} beatFade size="xl" style={{color: "#000000",}} />
                    </Button>

                </Container>
            </Navbar>


            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the elements you
                    have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default Sidebar;
