import { Button } from "react-bootstrap";
import Appbar from "../components/Appbar";
import Content from "../components/Content";
import Footer from "../components/Footer";

function Bayar() {
    return(
        <div className="App">
   <Appbar />
   <Content>
       <h4>Ayo Bayar!</h4>
   </Content>
   <Footer />
   </div>
    )
}

export default Bayar;