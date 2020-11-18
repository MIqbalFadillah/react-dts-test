import React, { Component } from 'react';
import '../style/Header.css';
import { BrowserRouter as Router,Route,Link } from "react-router-dom";
import Login from './Login';
import Home from './Home';
import { Nav } from 'react-bootstrap';

class test extends Component{

    render(){
        return(
            <Router>
                <div className="header">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg navbar-light warna">
                       <Link className="nav-link text-black" href="/">Banking Crowd Academy</Link>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <Link className="nav-link text-black"to="/Login">Sign In</Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className="">    
                        <Route path="/"/>
                        <Route path="/Login" component={Login}/>    
                </div>
            </Router>
        );
            
    }

}
export default test;
