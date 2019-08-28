import React from "react";
import{Navbar,Nav} from "react-bootstrap";


function Header(){
    return(
        <div>
        <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">My Recent</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Profile</Nav.Link>
      <Nav.Link href="#pricing">About</Nav.Link>
    </Nav>
    
  </Navbar>
        </div>
    )
}

export default Header;