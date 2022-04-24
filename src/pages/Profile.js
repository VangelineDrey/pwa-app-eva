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
        margin:"0px"
      }}>
        <div className="profile">
          <img style={{width:"100px", height:"100px", borderRadius:"70px"}} 
          src="https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?k=20&m=476085198&s=612x612&w=0&h=8J3VgOZab_OiYoIuZfiMIvucFYB8vWYlKnSjKuKeYQM="
          />
          {/* <h4>{unameState}</h4>
          <Button
          onClick={()=>{
            setUname("Ocha");
          }}>
            Change Username
          </Button> */}
        <div>
        </div>
        </div>
      </div>
      OTHER INFORMATION
      <hr></hr>
      FAQ<hr></hr>
      Abot e-Tax<hr></hr>
      Rate Us<hr></hr>
      Preference<br></br>
      Language
      <div className="mb-2">
      <Button variant="secondary" size="sm">
      LOG OUT
    </Button>
      </div>
    </Content>
    <Footer />
    </div>
  )
}

export default Profile;