import { Container, Nav, Navbar, NavbarBrand } from "react-bootstrap";

function Appbar() {
  return(
    <div className="header">
    <Navbar bg="dark" variant="dark" fixed="top">
    <Container>
      <NavbarBrand href="#home"></NavbarBrand>
      </Container>
      </Navbar>
    </div>
  );
  }
  
  export default Appbar;
  