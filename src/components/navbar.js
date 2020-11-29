import { Component} from "react";
//import styles from './navbar.css';
import '../App.css';
import {Navbar , Nav} from 'react-bootstrap';
    

class NavBar extends Component{
    render() {
        return (
            <div>
              <Navbar bg="dark" variant="dark" sticky="top">
    
    <Nav className="ml-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#blog">Blog</Nav.Link>
      <Nav.Link href="#about">About</Nav.Link>
    </Nav>
    
  </Navbar>
              
            </div>
        );
    }
}

export default NavBar;