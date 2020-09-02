import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">COVID Stats</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    <Link to='/country'>Local Stats |</Link>
                    <Link to='/world'>| Global Stats</Link>
                
                    </Nav>
                  
                 </Navbar.Collapse>
                </Navbar>
        </div>
    )
}
export default Header;