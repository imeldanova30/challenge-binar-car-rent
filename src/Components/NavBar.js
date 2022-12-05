import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../Assets/logo.png'
import './Navbar.css'

const NavBar = () =>{
    return(
        <>
          <Navbar className='navbar-content' expand="lg">
              <Container>
                <Navbar.Brand href="/"><img src={logo} alt='logo' /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="flex-grow-1 navbar-item">
                    <Nav.Link href="#ourservices" >Our Services</Nav.Link>
                    <Nav.Link href="#whyus">Why Us</Nav.Link>
                    <Nav.Link href="#testimonial">Testimonial</Nav.Link>
                    <Nav.Link href="#faq">FAQ</Nav.Link>

                  </Nav>
                </Navbar.Collapse>
              </Container>
          </Navbar>
        </>
    )
}


export default NavBar;