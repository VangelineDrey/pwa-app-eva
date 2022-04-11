import { useState } from "react";
import { Button } from "react-bootstrap";
import Appbar from "../components/Appbar";
import Content from "../components/Content";
import Footer from "../components/Footer";

function Profile() {
const [unameState, setUname] = useState("User")
  return(
    <div className="App">
      <Appbar />
      <Content>
      <div style={{
        display:"flex",
        justifyContent:"space-around",
        margin:"0px"
      }}>
        <div>
          <img style={{width:"130px", height:"130px", borderRadius:"70px"}} 
          src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHBlcnNvbnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=1000&q=60"
          />
        <div>
          <center>
          <h4>{unameState}</h4>
          <Button
          onClick={()=>{
            setUname("Ocha");
          }}>
            Change Username
          </Button>
          </center>
        </div>
        </div>
      </div>
      <br></br>
      <p>Id:<br></br>1542 3567 4588</p>
      <p>Email:<br></br>etax.user@gmail.com</p>
      <p>Phone Number:<br></br>+62 8996574457</p>
    </Content>
    <Footer />
    </div>
  )
}

export default Profile;