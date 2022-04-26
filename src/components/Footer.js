import { Container, Nav, Navbar, NavbarBrand } from "react-bootstrap";

function Footer() {
    return(
    <Navbar   variant="dark" fixed="bottom" className="navbar">
    <Container>
      <div className="footer">
       <Nav className="me-auto">
         <Nav.Link href="/">
         <img style={{width:"30px", height:"30px"}} 
           src="https://cdn-icons-png.flaticon.com/128/1189/1189955.png?ga=GA1.2.1741669948.1650800225" /><br></br>
           Home</Nav.Link>
         <Nav.Link href="bayar">
           <div className="bayar">
         <img style={{width:"30px", height:"30px"}} 
           src="https://cdn-icons-png.flaticon.com/128/1257/1257232.png?ga=GA1.2.1741669948.1650800225" /><br></br>
           Bayar</div></Nav.Link>
         <Nav.Link href="analisis">
           <img style={{width:"30px", height:"30px"}} 
           src="https://cdn-icons-png.flaticon.com/128/1237/1237288.png?ga=GA1.2.1741669948.1650800225" /><br></br>
           Analisis</Nav.Link>
       </Nav>
       </div>
   </Container>
 </Navbar>
 );
  }
  
  export default Footer;
  