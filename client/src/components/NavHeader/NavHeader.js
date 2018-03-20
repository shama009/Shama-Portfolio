import React from 'react'; 
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';


const NavHeader = ()=>(
<Navbar>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="/about">Shama Anjum</a>
    </Navbar.Brand>
  </Navbar.Header>
  <Nav>
    <NavItem eventKey={1} href="/about">
      Home
    </NavItem>
    <NavItem eventKey={2} href="/portfolio">
      Portfolio
    </NavItem>
    <NavItem eventKey={2} href="/contact">
      Contact
    </NavItem>
    <NavItem eventKey={2} href="/resume">
      Resume
    </NavItem>
    <NavDropdown eventKey={3} title="Connect" id="basic-nav-dropdown">
      <MenuItem eventKey={3.1} href = "https://www.linkedin.com/in/shama-anjum">LinkedIn</MenuItem>
      <MenuItem eventKey={3.2} href = "https://github.com/shama009">GitHub</MenuItem>
      <MenuItem divider />
      <MenuItem eventKey={3.4} href = "/contact">Contact</MenuItem>
    </NavDropdown>
  </Nav>
</Navbar>
);
export default NavHeader;
