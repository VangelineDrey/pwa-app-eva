import { Button } from "react-bootstrap";
import Appbar from "../components/Appbar";
import Content from "../components/Content";
import Footer from "../components/Footer";

function Bantuan() {
    return(
        <div className="App">
   <Appbar />
   <Content>
       <h3>Pusat Bantuan</h3>
       <Button variant="success">Informasi Umum</Button>{' '}
       <Button variant="success">Status Subjek Pajak</Button>{' '}
       <Button variant="success">Definisi Subjek Pajak</Button>{' '}
       <Button variant="success">Ketentuan Pajak</Button>{' '}
   </Content>
   <Footer />
   </div>
    )
}

export default Bantuan;