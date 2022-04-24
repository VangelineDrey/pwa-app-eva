import { Button } from "react-bootstrap";
import Appbar from "../components/Appbar";
import Content from "../components/Content";
import Footer from "../components/Footer";

function Npwp() {
    return(
        <div className="App">
   <Appbar />
   <Content>
       <h3>Cek NPWP</h3>
       <Button variant="secondary" size="md" href="npwp">
        Cek NPWP disini!
      </Button>
   </Content>
   <Footer />
   </div>
    )
}

export default Npwp;