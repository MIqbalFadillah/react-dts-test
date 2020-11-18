import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';
import Home from './Home';
import test from './test';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Header extends Component {
    render(){
        return( 
            <Container>
                <Router>
                    <Navbar bg="light">
                        <Navbar.Brand href="/Home">
                            <h4>Banking Crowd Academy</h4>
                        </Navbar.Brand>
                        <Navbar.Toggle/>
                        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                                <Nav.Link href="/Login">
                                <h5>Sign in</h5>
                                </Nav.Link>
                                    
                                
                        </Navbar.Collapse>
                    </Navbar>
                    <div className="">
                        <Route path="/Login" component={Login}/>   
                        
                    </div>
                </Router>
            </Container>         
        )
    }
}

export default Header;