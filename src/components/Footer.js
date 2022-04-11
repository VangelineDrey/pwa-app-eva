import { Container, Nav, Navbar, NavbarBrand } from "react-bootstrap";

function Footer() {
    return(
    <Navbar bg="dark" variant="dark" fixed="bottom" className="navbar">
    <Container>
       <Nav className="me-auto">
         <Nav.Link href="/">Home</Nav.Link>
         <Nav.Link href="user">User</Nav.Link>
         <Nav.Link href="profile">Profile</Nav.Link>
       </Nav>
   </Container>
 </Navbar>
 );
  }
  
  export default Footer;
  