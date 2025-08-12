import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./css/Navbar.css";
import { FaCog, FaHome, FaUser } from 'react-icons/fa';
import { IoMenu } from 'react-icons/io5';
import { BsCart2 } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

const NavSection = () => {
  return (
    <div> 
      {/* Top Navbar (Desktop) */}
      <Navbar expand="lg" className="navbar-top">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Bottom Navbar (Mobile) */}
      <div className="navbar-bottom">
        <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
          <FaHome />
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
          <FaUser />
        </NavLink>
        <NavLink to="/menu" className={({ isActive }) => (isActive ? "active" : "")}>
          <IoMenu />
        </NavLink>
        <NavLink to="/cart" className={({ isActive }) => (isActive ? "active" : "")}>
          <BsCart2 />
        </NavLink>
        <NavLink to="/settings" className={({ isActive }) => (isActive ? "active" : "")}>
          <FaCog />
        </NavLink>
      </div>
    </div>
  )
}

export default NavSection;
