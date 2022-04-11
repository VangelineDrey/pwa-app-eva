import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Appbar from "../components/Appbar";
import Content from "../components/Content";
import Footer from "../components/Footer";
import { getUsers } from "../services/axios";

function About() {
    return(
        <div className="App">
   <Appbar />
   <Content>
       <h3>Tentang Pajak</h3>
       <br></br>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet dui diam, eget vulputate dolor aliquam sit amet. Donec sollicitudin imperdiet dolor id blandit. Aliquam sit amet dolor metus. Maecenas neque enim, iaculis et maximus vel, feugiat sit amet tellus. Aliquam eu convallis nisi. Vestibulum eget semper sem. Maecenas dignissim consequat urna sed lacinia. In elementum, tortor malesuada consectetur dignissim, ex libero convallis eros, sit amet malesuada sem quam in metus.</p>      
      <p>In eu semper elit, id maximus ipsum. Vivamus ac arcu nibh. Vivamus et leo ac mauris molestie cursus ut id magna. Nam id congue nibh, ut lobortis libero. Sed vitae vehicula arcu. Aliquam porttitor iaculis nisl, et dignissim augue bibendum quis.</p>      
   </Content>
   <Footer />
   </div>
    )
}

export default About;