import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, Outlet } from 'react-router-dom';
import Footer from './Footer';
import './Main.css';
const Layout =()=>{
    return(
        <>
        
        <Navbar expand="lg" className="bg-body-tertiary navbar1">
      <Container>
        <Navbar.Brand href="#home">
        
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav  navlink">
          <Nav className="navlink">
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/service">Service</Link>
          <Link to="/contact">Contact</Link>
       </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    
    <Outlet/>
    <Footer></Footer>
    
        </>
    )
}
export default Layout;