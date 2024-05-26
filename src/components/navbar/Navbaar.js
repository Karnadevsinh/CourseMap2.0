import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./navbarStyle.css"
import IconButton from '@mui/material/IconButton';
import Fingerprint from '@mui/icons-material/Fingerprint';
import { Link } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';

function Navbaar() {
    const [user, setUser] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        // Replace with actual login status check
        const loggedInUser = localStorage.getItem('user');
        if (loggedInUser) {
            setUser(loggedInUser);
        }
    }, []);

    const handleLogin = () => {
        navigate('/login', { state: { from: window.location.pathname } });
    }

    const handleLogout = () => {
        localStorage.removeItem('user');
        setUser(null);
        navigate('/');
    }

    return (
        <div>
            <Navbar sticky="top" id='navBar' expand="lg" className="">
                <Container fluid>
                    <Navbar.Brand href="#">CourseMap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#" disabled>
                                Courses
                            </Nav.Link>
                            <NavDropdown title="Browse" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form className="d-flex">
                            {user ? (
                                <>
                                    <span className="navbar-text me-3">Welcome, {user}</span>
                                    <Button style={{marginTop: "3px"}} variant="outline-danger" onClick={handleLogout}>
                                        Logout
                                    </Button>
                                </>
                            ) : (
                                <>
                                    <Link to="/signUp">
                                        <button
                                            className={`
                                                px-2.5 py-1 rounded-full 
                                                flex items-center gap-2 
                                                text-slate-500
                                                shadow-[-2px_-2px_5px_rgba(255,_255,_255,_0.8),_2px_2px_5px_rgba(0,_0,_0,_0.25)]
                                                
                                                transition-all

                                                hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]
                                                hover:text-violet-500
                                            `}
                                        >
                                            <IconButton aria-label="fingerprint" color="secondary">
                                                <Fingerprint />
                                            </IconButton>
                                            <span style={{ marginLeft: "-10px" }}>Sign-Up</span>
                                        </button>
                                    </Link>

                                    <button
                                        id='btnLogin'
                                        onClick={handleLogin}
                                        className={`
                                            px-2.5 py-1 rounded-full 
                                            flex items-center gap-2 
                                            text-slate-500
                                            shadow-[-2px_-2px_5px_rgba(255,_255,_255,_0.8),_2px_2px_5px_rgba(0,_0,_0,_0.25)]
                                            
                                            transition-all

                                            hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]
                                            hover:text-green-700
                                        `}
                                    >
                                        <IconButton aria-label="fingerprint" color="success">
                                            <Fingerprint />
                                        </IconButton>
                                        <span style={{ marginLeft: "-10px" }}>Login</span>
                                    </button>
                                </>
                            )}
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Navbaar;
