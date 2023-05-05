

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Navbar, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import "./Sidebar.scss";
import { Link } from 'react-router-dom';


const Sidebar = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Navbar expand="lg" variant="light" bg="light">
                <Container>
                    <Navbar.Brand href="#">Musicfy</Navbar.Brand>
                    <Button className="sidebarToggle" variant="outline-secondary" onClick={handleShow}>
                        <FontAwesomeIcon icon={faBars} beatFade size="xl" style={{ color: "#000000", }} />
                    </Button>

                </Container>
            </Navbar>


            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Menù</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active" onClick={handleClose}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/songs" className="nav-link" onClick={handleClose}>Brani</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/artists" className="nav-link" onClick={handleClose}>Artisti</Link>
                        </li>
                    </ul>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default Sidebar;
